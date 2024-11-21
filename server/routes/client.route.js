import express from "express";
import {
  getAllProducts,
  getAllCustomers,
  getAllTransactions,
} from "../controllers/client.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/customers", getAllCustomers);
router.get("/transactions", getAllTransactions);

export default router;
