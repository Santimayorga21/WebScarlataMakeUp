import express from "express";
import { createCarrito, deleteCarrito, readCarrito, updateCarrito } from "../controllers/carritoController.js";

const carritoRouter = express.Router()
//CRUD
//Crear / Post
carritoRouter.post("/",createCarrito)
//Leer / Get
carritoRouter.get("/",readCarrito)
//Actualizar / Put
carritoRouter.patch("/",updateCarrito)
//Eliminar / Delete
carritoRouter.delete("/",deleteCarrito)

export default carritoRouter