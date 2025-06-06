import express from "express";
import * as AuthController from "../../controllers/auth";

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

export default router;
