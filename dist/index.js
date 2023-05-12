"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes_1 = require("./routes");
dotenv.config();
const app = express();
const uri = 'mongodb+srv://bluecomet2004:Bluecomet20040117@cluster0.scllotv.mongodb.net/portfolio';
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes_1.default);
app.get('/', (req, res) => res.send("Portfolio Backend."));
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
//# sourceMappingURL=index.js.map