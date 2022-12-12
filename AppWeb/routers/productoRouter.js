import express from "express";
import { createProducto, deleteProducto, readProducto, updateProducto } from "../controllers/productoController.js";



const productoRouter = express.Router()
//CRUD
//Crear / Post
productoRouter.post("/",createProducto)
//Leer / Get
productoRouter.get("/",readProducto)
//Actualizar / Put
productoRouter.patch("/",updateProducto)
//Eliminar / Delete
productoRouter.delete("/",deleteProducto)

export default productoRouter