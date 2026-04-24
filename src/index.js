import dotenv from 'dotenv';
dotenv.config({
    path : './env'
})

import connectDB from "./db/index.js";

connectDB();

import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) =>{
    res.send("Hello World")
}
)
app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
    console.log(`server URL : http://localhost:${PORT}`)
})


// other combined way of doing it directly in index.js

// ;( async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/ ${DB_NAME}`)
//     } catch (error) {
//         console.error("error occured: ", error)
//         throw error
//     }
// })() // executes a function right away
