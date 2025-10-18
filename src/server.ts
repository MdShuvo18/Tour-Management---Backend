import { Server } from "http";
import mongoose from "mongoose"
import app from "./app.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server: Server;


const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://todoList-backend:uDcD7NJYbyWh1jDB@cluster0.ameizfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to the DB")

        server = app.listen(5000, () => {
            console.log("Server is listing the Port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()


// process.on("unhandledRejection", () => {
//     console.log("Unhandled Rejection..... Shutting down.....")
//     if (server) {
//         server.close(() => {
//             process.exit(1)
//         })
//     }
//     process.exit(1)
// })

// Promise.reject(new Error ("I for got to catching the error"))