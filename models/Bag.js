const mongoose = require("mongoose");

const bag = mongoose.Schema(
  {
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
    bagImg: {
      type: String,
      required: true,
    },
    bagCategory: {
      type: String,
      required: true,
    },
    images: {
      type: [{
        img: {
          type: String,
          required: false,
        },
      }],
      required: false,
    },
  },
  { timestamps: true }
);

const bagModel = mongoose.model('bagModel', bag);
module.exports = bagModel;
