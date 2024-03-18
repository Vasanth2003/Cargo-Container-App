import express from "express";
import { getAllExporters, login, logout, profile, signup } from "../controllers/exporter-controller.js";

const router = express.Router()

router.get("/showallexporters",getAllExporters)
router.post("/signup",signup)
router.post("/login",login)
router.get("/profile",profile)
router.get("/logout",logout)

export default router;