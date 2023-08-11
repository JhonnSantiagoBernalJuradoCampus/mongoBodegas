import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";

const router = Router();

/**Bodegas ordenadas alfabeticamente */
router.get("/ordenado", async (req,res)=>{
    try {
        const db = await connectionDB();
        const bodega = db.collection("bodegas");

        const ordenados = await bodega.find().sort({nombre: 1}).toArray();
        res.send(ordenados);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
});

export default router;