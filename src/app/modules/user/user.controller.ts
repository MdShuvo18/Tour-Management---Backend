import type { Request, Response } from "express";
import { User } from "./user.model.js";

const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            message: "User create successfuly done",
            user
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.log(err);
        res.status(400).json({
            message: `Something went wrong!!! ${err.message}`,
            err
        })
    }
}

export const userControllers = {
    createUser
}