import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";

const router = Router();

router.get("/", async (req,res)=>{
    try {
        const db = await connectionDB();
        const user = db.collection("users");

        const users = await user.find().toArray();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
});

export default router;