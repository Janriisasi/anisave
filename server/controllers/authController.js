import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import transporter from '../config/nodeMailer.js';

export const register = async (req, res) => {
	const { name, email, password } = req.body;
  
	if (!name || !email || !password) {
	  return res.json({ success: false, message: 'Please fill all the fields' });
	}
  
	try {
	  const existingUser = await userModel.findOne({ email });
	  if (existingUser) {
		return res.json({ success: false, message: 'User already exists' });
	  }
  
	  const hashedPassword = await bcrypt.hash(password, 12);
	  const user = new userModel({ name, email, password: hashedPassword });
	  await user.save();
  
	  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
	  res.cookie('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
		maxAge: 3600000
	  });
  
	  // send an email
	  const mailOptions = {
		from: process.env.SENDER_EMAIL,
		to: email,
		subject: 'Account Verification',
		text: `Welcome to AniSave! Your account has been created with email id: ${email}`
	  }
  
	  // HERE IS WHERE YOU ADD THE NEW CODE (REPLACING THE EXISTING SENDMAIL LINE):
	  try {
		await transporter.sendMail(mailOptions);
		console.log('Email sent successfully to:', email);
	  } catch (emailError) {
		console.error('Email sending failed:', emailError);
		// Continue with registration even if email fails
	  }
  
	  return res.json({ success: true });
  
	} catch (error) {
	  console.error('Registration error:', error); // Log the actual error
	  return res.json({ success: false, message: 'Something went wrong' });
	}
  };

export const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({
			success: false,
			message: 'Please fill all the fields' 
		})
	}

	try {
		const user = await userModel.findOne({ email }); //find the user

		if (!user) {
			return res.json({ success: false, message: 'Invalid email' })
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password); //compare the password

		if (!isPasswordCorrect) {
			return res.json({ success: false, message: 'Invalid password' })
		}

		const token = jwt.sign({ id: user._id,}, process.env.
			JWT_SECRET, { expiresIn: '1h' }); //create a token

		res.cookie('token', token, {
			httpOnly: true, //send the token as a cookie
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
			maxAge: 3600000, //1 hour
		});

		return res.json({ success: true });
		
	}
	catch (error) {
		res.json({ success: false, message: 'Something went wrong' })//if something goes wrong
	}
}


export const logout = (req, res) => {
	try{
		res.clearCookie('token', {
			httpOnly: true, //clear the cookie
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
		})

		return res.json({ success: true, message: 'Logged out' });

	}
	catch (error) {
		res.json({ success: false, message: 'Something went wrong' })//if something goes wrong
	}
}

//send otp
export const sendVerifyOtp = async (req, res) => {
	try{

		const userId = req.userId;

        const user = await userModel.findById(userId);

		if(user.isAccountVerified){
			return res.json({ success: false, message: 'Account is already verified' });
		}

		const otp = String(Math.floor(100000 + Math.random() * 900000)) //magenerate random number for our otp

		user.verifyOtp = otp; //set the otp to the user 
		user.verifyOtpExpireAt = Date.now() + 10 * 60 * 1000; //set the expiry time to 10 minutes

		await user.save(); //save the user

		const mailOptions = {
			from: process.env.SENDER_EMAIL,
			to: user.email,
			subject: 'Account Verification OTP',
			text: `Welcome to AniSave! Your OTP is ${otp} and will expire in 10 minutes. Do not share this OTP with anyone.`
		}

		await transporter.sendMail(mailOptions); //send the email

		res.json({ success: true, message: 'OTP sent successfully' });

	}
	catch (error){
		console.error('OTP sending failed:', error);
		res.json({ success: false, message: 'Something went wrong' })//if something goes wrong
	}
}

export const verifyEmail = async (req, res) => {
    const { otp } = req.body;

    if(!otp){
        return res.json({ success: false, message: 'Please fill all the fields' });
    }

    try{
        const userId = req.userId;
        const user = await userModel.findById(userId);

        if(!user){
            return res.json({ success: false, message: 'Invalid user' });
        }

        if(user.verifyOtp == '' || user.verifyOtp !== otp){
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        if(user.verifyOtpExpireAt < Date.now()){
            return res.json({ success: false, message: 'OTP expired' });
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;

        await user.save();
        return res.json({ success: true, message: 'Email verified successfully' });
    }
    catch(error){
        console.error(error); // Add this to see the actual error
        res.json({ success: false, message: 'Something went wrong' });
    }
}