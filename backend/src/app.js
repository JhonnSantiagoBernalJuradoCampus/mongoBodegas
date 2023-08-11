import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import bodegasRouter from "./routes/bodegas.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/bodegas", bodegasRouter);
app.use("/users", userRouter);

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});