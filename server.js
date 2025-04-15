import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

// App Config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB(); // Connect to MongoDB
connectCloudinary();

// const corsOptions = {
//   origin: process.env.CORS_ORIGIN || "http://localhost:3000",
//   credentials: true,
//   optionsSuccessStatus: 200,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };

// Middleware

app.use(express.json());
app.use(cors());

// API endpoints

app.use("/api/user", userRouter)


app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ` + PORT);
});
