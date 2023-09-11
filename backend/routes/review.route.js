import express from "express";
import { verifyToken } from "../middleware/verify.js";
import { createReview, deleteReview, getReview } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", verifyToken, getReview);
router.get("/:id", verifyToken, deleteReview);

export default router;