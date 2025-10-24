import { Server } from "http";
import mongoose from "mongoose"
import app from "./app.js";
import { envVars } from "./app/config/env.js";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server: Server;


const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)

        console.log('connected to db')

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is listing the Port ${envVars.PORT}`)
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