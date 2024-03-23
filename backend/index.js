import express from "express"; 
import mongoose from "mongoose"; 
import cors from "cors";
import * as petRoutes from "./routes/pets.routes.js"; 

const app = express(); 


app.use(cors()); // Habilitamos el acceso a la API desde cualquier origen
app.use(express.json()); // Habilitamos el uso de JSON en la API
app.use(petRoutes.petRouter); // Habilitamos las rutas de la API
app.listen(8080); // Levantamos el servidor en el puerto 8080


//Conexión a la base de datos
mongoose.connect("mongodb://127.0.0.1:27017/petsdb")
.then(()=>console.log("Conexion Correcta:[ puerto 8080 ]"))
.catch((e)=>console.log("Error" + e));

