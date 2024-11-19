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

// MongoDB Setup
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the application if the database connection fails.
  }
}

// Start Server
(async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

  // Handle graceful shutdown
  process.on("SIGINT", async () => {
    console.log("\nShutting down gracefully...");
    await client.close();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    console.log("\nShutting down gracefully...");
    await client.close();
    process.exit(0);
  });
})();
