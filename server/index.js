import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); // it is used to parse the incoming request body in JSON format
app.use(cookieParser()); // it is used to parse the cookies in the incoming request
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.listen(port,()=>{
    console.log(`Server is running`);
    connectDb();

})