import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";

const router = Router();

router.get("/total", async (req,res)=>{
    try {
        const db = await connectionDB();
        const producto = db.collection("productos");

        const productos = await producto.aggregate([
        {
            $lookup: {
                from: "inventarios",
                localField: "_id",
                foreignField: "id_producto",
                as: "Total"
            }
        },
        {
            $match: {
                "Total": { $ne: [] }
            }
        },
        {
            $unwind: "$Total"
        },
        {
            $group: {
                _id: "$_id",
                nombre: { $first: "$nombre" },
                descripcion: { $first: "$descripcion" },
                estado: { $first: "$estado" },
                created_by: { $first: "$created_by" },
                created_at: { $first: "$created_at" },
                updated_at: { $first: "$updated_at" },
                deleted_at: { $first: "$deleted_at" },
                Total: { $sum: "$Total.cantidad" }
            }
        },
        {
            $sort: {
                "Total": -1
            }
        }
    ]).toArray();
    res.send(productos);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
})

export default router;