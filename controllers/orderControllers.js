import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD(cash on delivery) method

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      data: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // clear cart data once order is placed
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.status(200).json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: `Order was not placed because of ${error.message}`,
      });
  }
};

// Placing orders using Stripe method

const placeOrderStripe = async (req, res) => {};

// Placing orders using Razorpay method

const placeOrderRazorpay = async (req, res) => {};

// All orders data for Admin panel
const allOrders = async (req, res) => {};

// User orders data for Frontend
const userOrders = async (req, res) => {};

// Update order status from Admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
