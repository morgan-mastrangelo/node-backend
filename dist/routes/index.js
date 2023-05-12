"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const contact_1 = require("./contact");
const router = express.Router();
router.use('/contact', contact_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map