# Bodegas MongoDB
## Diagrama base de datos
Ejercicio de bodegas para practicar mongo, se creo la base de datos según este diagrama.

<img src="./backend/assets/database.png">

# Manual de uso
1. Clonar este repositorio
2. Se recomienda tener instalada la extensión `MongoDB for Vs Code`
3. Para utilizar la extensión siga los siguientes pasos:
    - Abra la extensión en el panel izquierdo en el simbolo de hoja
    - En conexiones abra el panel de nueva coleccion
    - ingrese esta conexion: `mongodb+srv://sputnik:12345@ejemplocluster.p78ttxa.mongodb.net/`
4. **SOLO SI** desea utilizar una conexion distinta en Athlas ejecute el archivo que se encuentra en : `./backend/db/query.mongodb`
    - Para ejecutar las consultas debe entrar al archivo y dale en el icono que se encuentra arriba a la derecha de play
# Instalacion
1. Despues de clonar el respositorio abra la terminal y ejecute el comando `npm i` el cual instalara todas las dependencias requeridas
2. Cambie el nombre del archivo `.env.example` a `.env`
3. Ejecute el comando `npm run dev` el cual iniciara el servidor
4. Para realizar las consultas deberá tener instalada la extensión Thunder Client y darle en `New Request`
# Api
## **uri**: `http://127.03.1.3:5010`
## Get
### Endpoints
1. `/bodegas/ordenado`
- Bodegas ordenadas alfabéticamente.
    <details>
    <summary>Ejemplo de datos de salida</summary>

    ```json
    [
        {
            "_id": 50,
            "nombre": "A Bodega",
            "id_responsable": 11,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2023-05-25T06:02:57.000Z",
            "updated_at": "2023-05-25T06:02:57.000Z",
            "deleted_at": null
        },
        {
            "_id": 41,
            "nombre": "Bodega 13.2",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-07-02T01:29:51.000Z",
            "updated_at": "2022-07-02T01:29:51.000Z",
            "deleted_at": null
        },
        {
            "_id": 44,
            "nombre": "Bodega 59",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-07-11T23:44:50.000Z",
            "updated_at": "2022-07-11T23:44:50.000Z",
            "deleted_at": null
        },
        {
            "_id": 48,
            "nombre": "Bodega Anderson Atuesta",
            "id_responsable": 11,
            "estado": 11,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-07-22T00:57:05.000Z",
            "updated_at": "2022-07-22T00:57:05.000Z",
            "deleted_at": null
        },
        {
            "_id": 49,
            "nombre": "Bodega Anderson Atuesta555",
            "id_responsable": 11,
            "estado": 11,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-07-22T02:27:13.000Z",
            "updated_at": "2022-07-22T02:27:13.000Z",
            "deleted_at": null
        },
        {
            "_id": 42,
            "nombre": "Bodega Developer 13.2",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-07-02T01:30:24.000Z",
            "updated_at": "2022-07-02T01:30:24.000Z",
            "deleted_at": null
        },
        {
            "_id": 43,
            "nombre": "Bodega Developer 13.2",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-07-11T23:37:11.000Z",
            "updated_at": "2022-07-11T23:37:11.000Z",
            "deleted_at": null
        },
        {
            "_id": 36,
            "nombre": "asdefg",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-06-29T07:24:49.000Z",
            "updated_at": "2022-06-29T07:24:49.000Z",
            "deleted_at": null
        },
        {
            "_id": 37,
            "nombre": "bodega fg",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-06-29T07:25:17.000Z",
            "updated_at": "2022-06-29T07:25:17.000Z",
            "deleted_at": null
        },
        {
            "_id": 38,
            "nombre": "bodega fg",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-06-29T07:25:40.000Z",
            "updated_at": "2022-06-29T07:25:40.000Z",
            "deleted_at": null
        },
        {
            "_id": 39,
            "nombre": "bodega fg 2",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-06-29T07:28:31.000Z",
            "updated_at": "2022-06-29T07:28:31.000Z",
            "deleted_at": null
        },
        {
            "_id": 40,
            "nombre": "bodega fg 2",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-06-29T07:28:44.000Z",
            "updated_at": "2022-06-29T07:28:44.000Z",
            "deleted_at": null
        },
        {
            "_id": 11,
            "nombre": "bodega0",
            "id_responsable": 16,
            "estado": 1,
            "created_by": 16,
            "updated_by": null,
            "created_at": "2022-06-02T20:33:48.000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "_id": 12,
            "nombre": "bodega1",
            "id_responsable": 18,
            "estado": 1,
            "created_by": 18,
            "updated_by": null,
            "created_at": "2022-06-02T20:33:48.000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "_id": 13,
            "nombre": "bodega2",
            "id_responsable": 18,
            "estado": 1,
            "created_by": 18,
            "updated_by": null,
            "created_at": "2022-06-02T20:33:48.000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "_id": 35,
            "nombre": "bodega35",
            "id_responsable": 11,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-25T03:30:37.000Z",
            "updated_at": "2022-06-25T03:30:37.000Z",
            "deleted_at": null
        },
        {
            "_id": 18,
            "nombre": "bodega7",
            "id_responsable": 17,
            "estado": 1,
            "created_by": 17,
            "updated_by": null,
            "created_at": "2022-06-02T20:33:48.000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "_id": 19,
            "nombre": "bodega8",
            "id_responsable": 11,
            "estado": 1,
            "created_by": 11,
            "updated_by": null,
            "created_at": "2022-06-02T20:33:48.000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "_id": 20,
            "nombre": "bodega9",
            "id_responsable": 18,
            "estado": 1,
            "created_by": 18,
            "updated_by": null,
            "created_at": "2022-06-02T20:33:48.000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "_id": 29,
            "nombre": "bodegajuanpablo",
            "id_responsable": 19,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T05:41:51.000Z",
            "updated_at": "2022-06-03T05:41:51.000Z",
            "deleted_at": null
        },
        {
            "_id": 31,
            "nombre": "casamedrano",
            "id_responsable": 17,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T08:21:32.000Z",
            "updated_at": "2022-06-03T08:21:32.000Z",
            "deleted_at": null
        },
        {
            "_id": 32,
            "nombre": "centro",
            "id_responsable": 18,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T08:33:19.000Z",
            "updated_at": "2022-06-03T08:33:19.000Z",
            "deleted_at": null
        },
        {
            "_id": 27,
            "nombre": "fsfdf",
            "id_responsable": 13,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T02:48:00.000Z",
            "updated_at": "2022-06-03T02:48:00.000Z",
            "deleted_at": null
        },
        {
            "_id": 22,
            "nombre": "jsjsjss",
            "id_responsable": 13,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T02:30:47.000Z",
            "updated_at": "2022-06-03T02:30:47.000Z",
            "deleted_at": null
        },
        {
            "_id": 23,
            "nombre": "leeche",
            "id_responsable": 13,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T02:43:08.000Z",
            "updated_at": "2022-06-03T02:43:08.000Z",
            "deleted_at": null
        },
        {
            "_id": 30,
            "nombre": "micasa",
            "id_responsable": 18,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T06:31:09.000Z",
            "updated_at": "2022-06-03T06:31:09.000Z",
            "deleted_at": null
        },
        {
            "_id": 26,
            "nombre": "prueba",
            "id_responsable": 12,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T02:47:48.000Z",
            "updated_at": "2022-06-03T02:47:48.000Z",
            "deleted_at": null
        },
        {
            "_id": 28,
            "nombre": "prueba",
            "id_responsable": 12,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T05:10:32.000Z",
            "updated_at": "2022-06-03T05:10:32.000Z",
            "deleted_at": null
        },
        {
            "_id": 24,
            "nombre": "soto1",
            "id_responsable": 15,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T02:46:40.000Z",
            "updated_at": "2022-06-03T02:46:40.000Z",
            "deleted_at": null
        },
        {
            "_id": 25,
            "nombre": "soto2",
            "id_responsable": 15,
            "estado": 1,
            "created_by": null,
            "updated_by": null,
            "created_at": "2022-06-03T02:47:29.000Z",
            "updated_at": "2022-06-03T02:47:29.000Z",
            "deleted_at": null
        }
    ]
    ```
    </details>

2. `/productos/total`
- Productos ordenados de manera descendente por el campo total.
    <details>
    <summary>Ejemplo de datos de salida</summary>

    ```json
    [
        {
            "_id": 27,
            "nombre": "chocolisto",
            "descripcion": "jjjjjj",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T05:40:43.000Z",
            "updated_at": "2022-06-03T05:40:43.000Z",
            "deleted_at": null,
            "Total": 156772
        },
        {
            "_id": 28,
            "nombre": "Leche",
            "descripcion": "deslactosada",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T05:49:21.000Z",
            "updated_at": "2022-06-03T05:49:21.000Z",
            "deleted_at": null,
            "Total": 96999
        },
        {
            "_id": 30,
            "nombre": "cocacola",
            "descripcion": "coca cola",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T08:01:54.000Z",
            "updated_at": "2022-06-03T08:01:54.000Z",
            "deleted_at": null,
            "Total": 52222
        },
        {
            "_id": 25,
            "nombre": "sadasdasd",
            "descripcion": "chocolate",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T05:37:56.000Z",
            "updated_at": "2022-06-03T05:37:56.000Z",
            "deleted_at": null,
            "Total": 45666
        },
        {
            "_id": 24,
            "nombre": "lololol",
            "descripcion": "chocolate",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T05:36:44.000Z",
            "updated_at": "2022-06-03T05:36:44.000Z",
            "deleted_at": null,
            "Total": 45666
        },
        {
            "_id": 23,
            "nombre": "get chocolatinas",
            "descripcion": "chocolate",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T05:33:43.000Z",
            "updated_at": "2022-06-03T05:33:43.000Z",
            "deleted_at": null,
            "Total": 45666
        },
        {
            "_id": 18,
            "nombre": "producto7",
            "descripcion": "producto7",
            "estado": 1,
            "created_by": 11,
            "created_at": "2023-08-12T16:10:35.562Z",
            "updated_at": "2023-08-12T16:10:35.562Z",
            "deleted_at": null,
            "Total": 14887
        },
        {
            "_id": 34,
            "nombre": "asdasd",
            "descripcion": "dfdfssdf",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T08:48:25.000Z",
            "updated_at": "2022-06-03T08:48:25.000Z",
            "deleted_at": null,
            "Total": 8700
        },
        {
            "_id": 29,
            "nombre": "yogurt",
            "descripcion": "frescaleche",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T06:44:09.000Z",
            "updated_at": "2022-06-03T06:44:09.000Z",
            "deleted_at": null,
            "Total": 6000
        },
        {
            "_id": 26,
            "nombre": "milo",
            "descripcion": "500 kg",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T05:40:11.000Z",
            "updated_at": "2022-06-03T05:40:11.000Z",
            "deleted_at": null,
            "Total": 6000
        },
        {
            "_id": 31,
            "nombre": "pepsi",
            "descripcion": "copia",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T08:19:58.000Z",
            "updated_at": "2022-06-03T08:19:58.000Z",
            "deleted_at": null,
            "Total": 5200
        },
        {
            "_id": 33,
            "nombre": "gaseosa",
            "descripcion": "sadasd",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T08:44:25.000Z",
            "updated_at": "2022-06-03T08:44:25.000Z",
            "deleted_at": null,
            "Total": 1500
        },
        {
            "_id": 20,
            "nombre": "producto9",
            "descripcion": "producto9",
            "estado": 1,
            "created_by": 19,
            "created_at": "2023-08-12T16:10:35.562Z",
            "updated_at": "2023-08-12T16:10:35.562Z",
            "deleted_at": null,
            "Total": 1182
        },
        {
            "_id": 57,
            "nombre": "Producto Anderson Atuesta",
            "descripcion": "Esta es una prueba",
            "estado": 1,
            "created_by": 11,
            "created_at": "2022-07-22T01:34:37.000Z",
            "updated_at": "2022-07-22T01:34:37.000Z",
            "deleted_at": null,
            "Total": 500
        },
        {
            "_id": 58,
            "nombre": "Producto Anderson Atuesta",
            "descripcion": "Esta es una prueba",
            "estado": 1,
            "created_by": 11,
            "created_at": "2022-07-22T01:38:17.000Z",
            "updated_at": "2022-07-22T01:38:17.000Z",
            "deleted_at": null,
            "Total": 500
        },
        {
            "_id": 59,
            "nombre": "Producto Anderson Atuesta",
            "descripcion": "Esta es una prueba",
            "estado": 1,
            "created_by": 11,
            "created_at": "2022-07-22T01:49:42.000Z",
            "updated_at": "2022-07-22T01:49:42.000Z",
            "deleted_at": null,
            "Total": 500
        },
        {
            "_id": 32,
            "nombre": "postobon",
            "descripcion": "manzana",
            "estado": 1,
            "created_by": null,
            "created_at": "2022-06-03T08:33:46.000Z",
            "updated_at": "2022-06-03T08:33:46.000Z",
            "deleted_at": null,
            "Total": 200
        },
        {
            "_id": 48,
            "nombre": "whiskas",
            "descripcion": "comidad de gato",
            "estado": 1,
            "created_by": 13,
            "created_at": "2022-07-12T00:32:45.000Z",
            "updated_at": "2022-07-12T00:32:45.000Z",
            "deleted_at": null,
            "Total": 200
        },
        {
            "_id": 12,
            "nombre": "producto1",
            "descripcion": "producto1",
            "estado": 1,
            "created_by": 14,
            "created_at": "2023-08-12T16:10:35.562Z",
            "updated_at": "2023-08-12T16:10:35.562Z",
            "deleted_at": null,
            "Total": 124
        },
        {
            "_id": 13,
            "nombre": "producto2",
            "descripcion": "producto2",
            "estado": 1,
            "created_by": 13,
            "created_at": "2023-08-12T16:10:35.562Z",
            "updated_at": "2023-08-12T16:10:35.562Z",
            "deleted_at": null,
            "Total": 113
        },
        {
            "_id": 54,
            "nombre": "whiskas",
            "descripcion": "comidad de gato",
            "estado": 1,
            "created_by": 13,
            "created_at": "2022-07-12T00:47:25.000Z",
            "updated_at": "2022-07-12T00:47:25.000Z",
            "deleted_at": null,
            "Total": 100
        },
        {
            "_id": 11,
            "nombre": "producto0",
            "descripcion": "producto0",
            "estado": 1,
            "created_by": 16,
            "created_at": "2023-08-12T16:10:35.562Z",
            "updated_at": "2023-08-12T16:10:35.562Z",
            "deleted_at": null,
            "Total": 100
        },
        {
            "_id": 55,
            "nombre": "dog food",
            "descripcion": "comida de perro",
            "estado": 1,
            "created_by": 13,
            "created_at": "2022-07-12T01:55:42.000Z",
            "updated_at": "2022-07-12T01:55:42.000Z",
            "deleted_at": null,
            "Total": 100
        },
        {
            "_id": 60,
            "nombre": "Pringles",
            "descripcion": "papas fritas",
            "estado": 1,
            "created_by": null,
            "created_at": "2023-05-25T08:52:26.000Z",
            "updated_at": "2023-05-25T08:52:26.000Z",
            "deleted_at": null,
            "Total": 74
        },
        {
            "_id": 36,
            "nombre": "producto fg 1",
            "descripcion": "producto prueba fg",
            "estado": 1,
            "created_by": 11,
            "created_at": "2022-06-29T08:27:10.000Z",
            "updated_at": "2022-06-29T08:27:10.000Z",
            "deleted_at": null,
            "Total": 10
        },
        {
            "_id": 35,
            "nombre": "producto fg 1",
            "descripcion": "producto prueba fg",
            "estado": 1,
            "created_by": 11,
            "created_at": "2022-06-29T08:22:05.000Z",
            "updated_at": "2022-06-29T08:22:05.000Z",
            "deleted_at": null,
            "Total": 10
        },
        {
            "_id": 37,
            "nombre": "producto fg 1",
            "descripcion": "producto prueba fg",
            "estado": 1,
            "created_by": 11,
            "created_at": "2022-06-29T08:44:36.000Z",
            "updated_at": "2022-06-29T08:44:36.000Z",
            "deleted_at": null,
            "Total": 10
        },
        {
            "_id": 14,
            "nombre": "producto3",
            "descripcion": "producto3",
            "estado": 1,
            "created_by": 20,
            "created_at": "2023-08-12T16:10:35.562Z",
            "updated_at": "2023-08-12T16:10:35.562Z",
            "deleted_at": null,
            "Total": 7
        }
    ]
    ```
    </details>

## Post
### Endpoints
1. endpoint: `/bodegas/add`
- Agregar bodega.
- ejemplo de datos a pasar en el **body**: 
```json
{
    "id": 51,
    "nombre": "bodega 1000",
    "id_responsable": 16,
    "estado": 1,
    "created_by": 16,
    "updated_by": null
}
```
2. endpoint: `/productos/add`
- Agregar producto.
- ejemplo de datos a pasar en el **body**
```json
{
    "_id": 61,
    "nombre": "producto100",
    "descripcion": "producto10000",
    "estado": 2,
    "created_by": 20
}
```
3. endpoint `/inventarios/add`
- Agregar inventario, en caso de que ya exista se suma la cantidad
- Ejemplo de datos a pasar en el **body**
```json
{
    "id_bodega": 12,
    "id_producto": 30,
    "cantidad": 92
}
```
- Ejemplo de datos de salida: en caso de que no exista:
```json
{
    "message": "Agregado con exito"
}
```
- En caso de que ya exista:
```json
{
    "message": "Actualizado con exito"
}
```
## Put
### Endpoint
1. `/productos/traslado`
- Trasladar un producto de una bodega a otra
- Ejemplo de datos a pasar en el **body**
```json
{
    "cantidad": 12,
    "id_bodega_origen": 20,
    "id_bodega_destino": 12
}
```