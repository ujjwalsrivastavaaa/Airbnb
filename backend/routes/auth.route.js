import express from "express"
import { login, signup } from "../controllers/auth.controller.js"

const authRouter=express.Router()

authRouter.post("/signup",signup)
authRouter.get("/login",login)
export default authRouter;