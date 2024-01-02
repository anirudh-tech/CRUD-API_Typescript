import express from "express";
import mongoose from "mongoose";
import router from "./routes/router";


const app = express()
app.use(express.json());

const MONGO_URL = 'mongodb://localhost:27017'
mongoose.connect(MONGO_URL, {
    dbName: "node-typescript-app",
}).then(() => {
    console.log('connnected');
}).catch((error) => {
    console.log(error)
})

app.use('/', router)

app.listen(3001, () => {
    console.log(`server running at http://localhost:3001`)
})