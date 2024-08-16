import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//placing user order from frontend

const placeOrder = async (req, res) => {
  const { userId, items, amount, address } = req.body;
  const frontend_url = "http://localhost:3001";
  // const frontend_url =process.env.FRONTEND_URL;
  try {
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // stripe payment link
    const line_items = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "delivery charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "an error occured while processing payment",
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "not paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error occured in payment" });
  }
};

// user order for front end
const userOrders = async (req, res) => {
  try {
    // const orders = await orderModel.findById(req.body.userId);
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error occured while getting order data",
    });
  }
};

// listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error occured while getting order data for admin",
    });
  }
};

// api for updating status

// const updateStatus = async(req, res)=>{
//   try {
//     await orderModel.findByIdAndUpdate(req.body.userId, {status:req.body.status})
//     res.json({success: true, message: "status updated"})
//   } catch (error) {
//     console.log(error);
//     res.json({success: false, message: "status did not update"})

//   }
// }

const updateStatus = async (req, res) => {
  try {
    const order = await orderModel.findByIdAndUpdate(
      req.body.orderId, // Use orderId instead of userId
      { status: req.body.status },
      { new: true } // Return the updated document
    );

    if (!order) {
      return res.json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Status updated", order });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Status did not update" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
