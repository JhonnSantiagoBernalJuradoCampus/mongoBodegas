import { Router } from "express";
import { connectionDB } from "../../db/conexion.js";

const router = Router();

/**Mostrar los productos ordenados de manera descendente por el campo total*/
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

/** Realizar un EndPoint que permita insertar un productos y a su vez asigne una cantidad inicial del mismo en la tabla inventarios en una de las bodegas por default.*/
router.post("/add", async (req,res)=>{
    /**
        @var {req.body}
        req.body = {
            "_id": 61,
            "nombre": 'producto100',
            "descripcion": 'producto10000',
            "estado": 2,
            "created_by": 20
        }
     */
    try {
        const db = await connectionDB();
        const producto = db.collection("productos");

        const {id, nombre, descripcion, estado, created_by} = req.body
        
        const nuevoProducto = await producto.insertOne({
            _id: id,
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
            created_by: created_by,
            updated_by: null,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null
        });
        const _id = (id+17);
        const inventario = db.collection("inventarios");
        const nuevoInventario = await inventario.insertOne({
            _id: _id,
            id_bodega: 15,
            id_producto: id,
            cantidad: 200,
            created_by: 20,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null
        });
        res.send({message: "Agregado con exito"});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
});

export default router;