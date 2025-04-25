// Placing orders using COD(cash on delivery) method

const placeOrder = async (req, res) => {};

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
