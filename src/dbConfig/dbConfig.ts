import mongoose, { mongo } from "mongoose";

export async function connect() {
	try {
		mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;
		connection.on("connected", () => {
			console.log("Mongo DB connected successfully");
		});
		connection.on("error", (error) => {
			console.log("ERROR :- Please make sure MongoDB is running ");
			console.log(error);
		});
		process.exit();
	} catch (error) {
		console.log("Database connection :- Something goes wrong");
		console.log(error);
	}
}
