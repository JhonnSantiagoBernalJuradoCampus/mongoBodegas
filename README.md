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
1. `/bodegas/ordenado` Bodegas ordenadas alfabéticamente.
2. `/productos/total` Productos ordenados de manera descendente por el campo total.
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
En caso de que ya exista:
```json
{
    "message": "Actualizado con exito"
}
```