import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";
import { limit } from "../middleware/limit.js";

const router = Router();

/**Bodegas ordenadas alfabeticamente */
router.get("/ordenado", limit(), async (req,res)=>{
    if(!req.rateLimit) return;
    try {
        const db = await connectionDB();
        const bodega = db.collection("bodegas");

        const ordenados = await bodega.find().sort({nombre: 1}).toArray();
        res.send(ordenados);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
});

/**Agregar bodega*/
router.post("/add", limit(), async (req,res)=>{
    /**
     * @var req.body
     * req.body = {
            "id": 51,
            "nombre": "bodega 1000",
            "id_responsable": 16,
            "estado": 1,
            "created_by": 16,
            "updated_by": null
        }
     */
    if(!req.rateLimit) return;
    try {
        const db = await connectionDB();
        const bodega = db.collection("bodegas");
        const { id, nombre, id_responsable, estado, created_by, updated_by } = req.body;
        const nueva = await bodega.insertOne({
            _id: id,
            nombre: nombre,
            id_responsable: id_responsable,
            estado: estado,
            created_by: created_by,
            updated_by: updated_by,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null
        });

        res.status(201).send({message: "Agregado con exito"})
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
})

export default router;