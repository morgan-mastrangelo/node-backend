import { Request, Response } from "express";
import ContactModel from "../models/ContactModel";

export default class ContactController {
    static async get(req: Request, res: Response) {
        ContactModel.find()
            .then(comments => {
                res.json(comments);
            })
    }

    static async create(req: Request, res: Response) {
        const newComment = new ContactModel(req.body);
        await newComment.save()
            .then(comment => res.json({
                success: true,
                comment
            }))
    }

    static async update(req: Request, res: Response) {
        ContactModel.findById(req.params.id)
            .then(async (comment) => {
                if(comment) {
                    comment.name = req.body.name;
                    comment.email = req.body.email;
                    comment.comment = req.body.comment;

                    await comment.save();
                    res.json({
                        success: true,
                        message: "Updated Successfully.",
                        comment
                    })
                } else {
                    res.json({
                        success: false,
                        message: "There is no comment with this ID."
                    })
                }
            })
    }

    static async delete(req: Request, res: Response) {
        ContactModel.findByIdAndDelete(req.params.id)
            .then(() => res.json({ success: true, message: "Deleted Successfully." }))
    }
}