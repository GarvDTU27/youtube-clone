import dotenv from 'dotenv';
dotenv.config({
    path : './env'
})

import app from "./app.js";
const PORT = process.env.PORT || 8000;

import connectDB from "./db/index.js";
connectDB()
.then(()=>{
    app.listen(PORT, () =>{
        console.log(`Server is running on port: ${PORT}`)
        console.log(`server URL : http://localhost:${PORT}`)
    })
})
.catch((err) => {
    console.error("Error connecting to database:", err);
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

