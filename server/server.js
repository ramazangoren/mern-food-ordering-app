import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import 'dotenv/config'

import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// API routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  ConnectDB();
});
