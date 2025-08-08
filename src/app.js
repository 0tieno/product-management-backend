import express from "express";
import dotenv from "dotenv";

dotenv.config(); //load settings from .env file

const app = express();

//middleware to let express understand JSON
app.use(express.json());

//simple route
app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})

export default app;