import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import { configDotenv } from "dotenv";
import fileRoutes from "./routes/fileRoutes.js";
configDotenv();

// app config
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// api endpoint
app.get("/", (req, res) => {
  res.send("API  is running");
});
app.use("/api", fileRoutes);

// Global Error Handling Middleware (Optional)
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err.message);
  res
    .status(500)
    .json({ success: false, error: "An unexpected error occurred" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
