import express from "express";
import {
  getAllProducts,
  getAllCustomers,
} from "../controllers/client.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/customers", getAllCustomers);

export default router;
