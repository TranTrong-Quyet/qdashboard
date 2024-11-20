import express from "express";
import { getAllProducts } from "../controllers/client.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);

export default router;
