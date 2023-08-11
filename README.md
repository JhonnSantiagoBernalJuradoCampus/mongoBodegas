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