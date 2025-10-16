import { Server } from "http";
import express from "express";
import mongoose from "mongoose"


let server: Server;
const app = express();

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