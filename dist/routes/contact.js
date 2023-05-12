"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ContactController_1 = require("../controllers/ContactController");
const router = express.Router();
router.get('/', ContactController_1.default.get);
router.post('/', ContactController_1.default.create);
router.put('/:id', ContactController_1.default.update);
router.delete('/:id', ContactController_1.default.delete);
exports.default = router;
//# sourceMappingURL=contact.js.map