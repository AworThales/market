import express from "express";
import { confirmOrder, getOrders, paymentIntent } from "../controllers/order.controller.js";
import {verifyToken} from "../middleware/verify.js"

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, paymentIntent);
router.put("/", verifyToken, confirmOrder);

export default router;