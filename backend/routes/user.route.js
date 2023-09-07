import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verify.js";

const router = express.Router();

router.delete("/:userId", verifyToken, deleteUser);

export default router;