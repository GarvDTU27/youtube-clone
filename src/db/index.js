import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionIns = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MONGO_DB connected, DB host : ${connectionIns.connection.host}`)

    } catch (error) {
        console.error("Mongo DB connection error :", error)
    }
}

export default connectDB 