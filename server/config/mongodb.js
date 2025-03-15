import mongoose from "mongoose";

const connectDB = async () => {

	//if connected sa database, makakwa ta output sa console
	mongoose.connection.on("connected", () => 
		console.log("Connected to MongoDB")
	);

	await mongoose.connect(`${process.env.MONGODB_URI}/anisave`)
}

export default connectDB;