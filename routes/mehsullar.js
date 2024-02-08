const express = require('express');
const { Addbag, Gosterbag, deletebag } = require('../controllers/control.js');

const router = express.Router();

router.post("/addbag", Addbag);

router.get("/gosterbag", Gosterbag);
router.delete("/:id/deletebag", deletebag);

module.exports = router;
