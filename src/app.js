
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(cors({ // Enable CORS for all routes  CORS means cross-origin resource sharing, it allows the server to specify who can access its resources and how they can be accessed. It is a security feature implemented by web browsers to prevent malicious websites from making unauthorized requests to a different domain.
    origin: process.env.CORS_ORIGIN, // Replace with your client's URL
    credentials: true, // Allow cookies to be sent with requests
})); 

app.use(express.json({limit: "16kb"})); // Middleware to parse JSON request bodies
app.use(express.urlencoded({extended: true, limit: "16kb"})); // Middleware to parse URL-encoded request bodies
app.use(express.static("public")); // Middleware to serve static files from the "public" directory
app.use(cookieParser()); // Middleware to parse cookies from incoming requests

const app = express();

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) =>{
    res.send("Hello World")
}
)

export default app;