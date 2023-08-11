import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";

const router = Router();

router.post("/add", async(req,res)=>{
    /**
     * @var {req.body}
     * req.body = {
     *  "id_bodega": 12,
        "id_producto": 30,
        "cantidad": 92
     * }
     */
    try {
        const db = await connectionDB();
        const inventario = db.collection("inventarios");

        const {id_producto, id_bodega, cantidad} = req.body;
        const existe = await inventario.find({"id_producto": id_producto, "id_bodega": id_bodega}).toArray();
        if(existe[0] === undefined){
            inventario.insertOne({
                    id_bodega: id_bodega,
                    id_producto: id_producto,
                    cantidad: cantidad,
                    created_by: 25,
                    created_at: null,
                    updated_at: null,
                    deleted_at: null
            });
            res.status(201).send({message: "Agregado con exito"})
        }else {
            const can = existe[0].cantidad;
            const nueva = (cantidad+ can)
            inventario.updateOne({"id_bodega": id_bodega,"id_producto": id_producto}, {$set: {cantidad: nueva}});
            res.status(202).send({message: "Actualizado con exito"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
})

export default router;