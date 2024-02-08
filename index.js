const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mehsullar = require('./routes/mehsullar.js');
const productanbar = require('./routes/productanbar.js');

dotenv.config();

const turkanrustamova = express();

turkanrustamova.use(express.json());
turkanrustamova.use(helmet());
turkanrustamova.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
turkanrustamova.use(morgan("common"));
turkanrustamova.use(bodyParser.json({ limit: "30mb", extended: true }));
turkanrustamova.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
turkanrustamova.use(cors());
turkanrustamova.use('/butunmehsul', mehsullar);
turkanrustamova.use('/butunproduct', productanbar);

turkanrustamova.get("/", (req, res) => res.send("turkan"));

const PORT = process.env.PORT || 5500;
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        turkanrustamova.listen(PORT, () => console.log(`mongo burda isleyir ${PORT}`));
    })
    .catch((error) => console.log(`${error} expected`));
