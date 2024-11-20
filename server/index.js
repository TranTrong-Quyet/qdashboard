import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

// import routes
import clientRoutes from "./routes/client.route.js";
import generalRoutes from "./routes/general.route.js";
import managementRoutes from "./routes/management.route.js";
import salesRoutes from "./routes/sales.route.js";

// data import
// import User from "./models/user.js";
// import Product from "./models/product.model.js";
// import Transaction from "./models/transaction.model.js";
// import ProductStat from "./models/productStats.model.js";
// import OverallStat from "./models/overallStat.model.js";
// import AffiliateStat from "./models/affiliate.model.js";
// import {
//   dataUser,
//   dataProduct,
//   dataTransaction,
//   dataAffiliateStat,
//   dataOverallStat,
//   dataProductStat,
// } from "./data/index.js";

// Configuaration
dotenv.config();
const PORT = process.env.PORT || 9002;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//  routes
app.use("/client", clientRoutes),
  app.use("/general", generalRoutes),
  app.use("/management", managementRoutes),
  app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat); --
    // OverallStat.insertMany(dataOverallStat); --
    // Product.insertMany(dataProduct); --
    // ProductStat.insertMany(dataProductStat); --
    // Transaction.insertMany(dataTransaction); --
    // User.insertMany(dataUser); --
  })
  .catch((error) => console.log(`${error} did not connect`));
