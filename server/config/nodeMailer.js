// Modified nodemailer.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config(); // Make sure to load environment variables

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: true // This helps with diagnosing connection issues (remove in production)
});

// Verify the connection before exporting
transporter.verify(function(error, _success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

export default transporter;