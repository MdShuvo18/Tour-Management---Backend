import express, { type Request, type Response } from "express";
import cors from "cors"
import { UserRoutes } from "./app/modules/user/user.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", UserRoutes)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Welcome to server backend system" });

})

export default app