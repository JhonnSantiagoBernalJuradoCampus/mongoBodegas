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
});

/** Realizar un EndPoint que permita insertar un productos y a su vez asigne una cantidad inicial del mismo en la tabla inventarios en una de las bodegas por default.*/
router.post("/add", async (req,res)=>{
    /**
        @var {req.body}
        req.body = {
            "_id": 61,
            "nombre": "producto100",
            "descripcion": "producto10000",
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

/** Realizar un EndPolnt que permita Trasladar unproducto de una bodega a otra
• Se debe validar que la cantidad de unidades que se pretende sacar
de una Bodega, sea posible, ya que si tengo 1O unidades en la
Bodega A, no podré sacar de ella 20 unidades. Esta acción debe
generar una alerta e impedir el registro.
• Para la afectación de las tablas se debe considerar que del Origen debo
restar la cantidad,y
al destino le debo sumar lacantidad.
Por ejemplo: Bodega A = 1O unidades. Bodega B = 1O unidades. Haré
el traslado de 5
unidades desde la Bodega A para la Bodega B,Por lo cual el resultado
será hacer Updated
a los dos registros en inventarios:
Bodega A = 5 unidades. Bodega B = 15 unidades. Además hacer un
lnsert con toda la
información en la tabla de historiales.*/
router.put("/traslado", async (req,res)=>{
    /**
     * @var {req.body}
    req.body = {
        "cantidad": 12,
        "id_bodega_origen": 20,
        "id_bodega_destino": 12
    }
     */
    try {
        const db = await connectionDB();
        const historial = db.collection("historiales");
        const inventario = db.collection("inventarios");

        const {id_bodega_origen, id_bodega_destino, cantidad} = req.body
        const origen = await inventario.findOne({id_bodega: id_bodega_origen});
        const destino = await inventario.findOne({id_bodega: id_bodega_destino});
        if(origen === null || destino === null){
            res.status(404).send({message: "Bodega no encontrada"})
        }
        else{
            if(origen.cantidad < cantidad){
                res.status(416).send({message: "La cantidad que desea trasladar es mayor a la que existe en la bodega"})
            }
            else {
                const cantidadOrigen = (origen.cantidad-cantidad);
                const cantidadDestino = (destino.cantidad+cantidad);
                await inventario.updateOne({id_bodega: id_bodega_origen}, {$set: {cantidad: cantidadOrigen}});
                await inventario.updateOne({id_bodega: id_bodega_destino}, {$set: {cantidad: cantidadDestino}});
                await historial.insertOne({
                    "cantidad": cantidad,
                    "id_bodega_origen": id_bodega_origen,
                    "id_bodega_destino": id_bodega_destino,
                    "id_inventario" : destino._id,
                    "created_by" : 20,
                    "created_at": null,
                    "updated_at": null,
                    "deleted_at": null
                })
                res.status(202).send({message: "Actualizado con exito"})
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error en el servidor"});
    }
});

export default router;