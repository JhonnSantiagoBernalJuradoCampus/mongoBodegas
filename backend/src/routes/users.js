import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";
import { limit } from "../middleware/limit.js";

const router = Router();

router.get("/", limit(), async (req,res)=>{
    if(!req.rateLimit) return;
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