import express from "express";

const router = express.Router();

//example extra route
router.get("/ping", (req, res) => {
    res.json({
        message: "pong"
    });
});

export default router;