import express from "express";
import { createAdmin, deleteAdmin, readAdmin, updateAdmin } from "../controllers/adminController.js";
import verificarToken from "../middlewares/verificarToken.js";

const adminRouter = express.Router()

//CRUD
//Crear / Post
adminRouter.post("/",createAdmin)
//Leer / Get
adminRouter.get("/",verificarToken,readAdmin)
//Actualizar / Put
adminRouter.patch("/",updateAdmin)
//Eliminar / Delete
adminRouter.delete("/",deleteAdmin)

export default adminRouter