import express from "express";
import { createCliente, deleteCliente, readCliente, updateCliente } from "../controllers/clienteController.js";


const clienteRouter = express.Router()
//CRUD
//Crear / Post
clienteRouter.post("/",createCliente)
//Leer / Get
clienteRouter.get("/",readCliente)
//Actualizar / Put
clienteRouter.patch("/",updateCliente)
//Eliminar / Delete
clienteRouter.delete("/",deleteCliente)

export default clienteRouter