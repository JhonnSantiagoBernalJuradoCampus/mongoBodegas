import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRouter);

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});