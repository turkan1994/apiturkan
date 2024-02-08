const express = require('express');
const { Addproduct, Gosterproduct, deleteproduct } = require('../controllers/product.js');

const router = express.Router();

router.post("/addproduct", Addproduct);
router.get("/gosterproduct", Gosterproduct);
router.delete("/:id/deleteproduct", deleteproduct);

module.exports = router;
