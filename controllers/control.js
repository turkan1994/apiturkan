const bagModel = require("../models/Bag.js");

exports.Addbag = async function(req, res) {
    try {
        const bag = new bagModel(req.body);
        await bag.save();
        res.status(200).json("TAMAMLANDI");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// exports.Elavebag = async function(req, res) {
//     try {
//         const bag = new bagModel(req.body);
//         await bag.save();
//         res.status(201).json("TAMAMLANDI");
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// };

exports.Gosterbag = async function(req, res) {
    try {
        const gosterilenbag = await bagModel.find();
        res.status(200).json(gosterilenbag);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deletebag = async function(req, res) {
    try {
        await bagModel.findOneAndDelete({ _id: req.body._id });
        const bagModels = await bagModel.find();
        res.status(200).json(bagModels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
