import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); // Cross-Origin Resource Sharing

app.use(express.json({ limit: "16kb" })); // parse json data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // parse urlencoded data
app.use(express.static("public")); // serve static files
app.use(cookieParser()); // parse cookies

//routes import
// import userRouter from './routes/user.js'

//routes declaration
// app.use("/api/v1/users", userRouter)

export { app };
