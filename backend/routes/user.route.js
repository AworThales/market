import express from "express";
import { deleteUser } from "../controllers/user.controler";

const router = express.Router();

router.get("/test", deleteUser);

export default router;