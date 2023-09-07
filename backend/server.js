import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";


const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONDB);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);

app.listen(process.env.PORT || 5000, () =>{
    connect();
    console.log("backend Server is running")
});