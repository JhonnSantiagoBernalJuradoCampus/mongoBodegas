import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import bodegasRouter from "./routes/bodegas.js";
import productosRouter from "./routes/productos.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/bodegas", bodegasRouter);
app.use("/users", userRouter);
app.use("/productos", productosRouter);

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});