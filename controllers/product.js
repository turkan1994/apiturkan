const productModel = require("../models/Anbar.js");

exports.Addproduct = async function(req, res) {
    try {
        const product = new productModel(req.body);
        await product.save();
        res.status(200).json("TAMAMLANDI");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.Gosterproduct = async function(req, res) {
    try {
        const gosterilenproduct = await productModel.find();
        res.status(201).json(gosterilenproduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteproduct = async function(req, res) {
    try {
        await productModel.findOneAndDelete({ _id: req.body._id });
        const productModels = await productModel.find();
        res.status(200).json(productModels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
