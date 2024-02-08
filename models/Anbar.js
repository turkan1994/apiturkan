const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    bagImg: {
      type: String,
      required: true,
    },
    username:{
      type: String,
      required: true,
    },
    useremail:{
      type: String,
      required: true,
    },
    userphone:{
      type: String,
      required: true,
    },
    bagAd: {
      type: String,
      required: true,
    },
    bagNov: {
      type: String,
      required: true,
    },
    bagPrice: {
      type: Number,
      required: true,
    },
   
    bagCategory: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1, // You can set a default value if needed
      required: true,
    },
    
});

const Anbarproject = new mongoose.Schema(
  {

    cartItems: {
      type: [cartItemSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Anbar = mongoose.model("Anbar", Anbarproject);
module.exports = Anbar;
