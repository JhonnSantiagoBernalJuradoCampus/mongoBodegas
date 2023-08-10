import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});