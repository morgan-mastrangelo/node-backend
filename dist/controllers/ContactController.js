"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactModel_1 = require("../models/ContactModel");
class ContactController {
    static async get(req, res) {
        ContactModel_1.default.find()
            .then(comments => {
            res.json(comments);
        });
    }
    static async create(req, res) {
        const newComment = new ContactModel_1.default(req.body);
        await newComment.save()
            .then(comment => res.json({
            success: true,
            comment
        }));
    }
    static async update(req, res) {
        ContactModel_1.default.findById(req.params.id)
            .then(async (comment) => {
            if (comment) {
                comment.name = req.body.name;
                comment.email = req.body.email;
                comment.comment = req.body.comment;
                await comment.save();
                res.json({
                    success: true,
                    message: "Updated Successfully.",
                    comment
                });
            }
            else {
                res.json({
                    success: false,
                    message: "There is no comment with this ID."
                });
            }
        });
    }
    static async delete(req, res) {
        ContactModel_1.default.findByIdAndDelete(req.params.id)
            .then(() => res.json({ success: true, message: "Deleted Successfully." }));
    }
}
exports.default = ContactController;
//# sourceMappingURL=ContactController.js.map