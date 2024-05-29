import express from "express";
import dotenv from "dotenv";
import cors from "cors";


const app = express();

// Load environment variables from a .env file if it exists
dotenv.config();
app.use(cors())
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

app.get("/api/data", (req, res) => {
    const data = {
        message: "Hello, this data is comming from backend.",
    }
    res.json(data);

})

app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`)
})