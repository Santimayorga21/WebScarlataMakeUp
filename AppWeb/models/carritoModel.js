import mongoose from "mongoose";
import clienteModel from "./clienteModel.js"
import productoModel from "./productoModel.js";

const carritoModel = mongoose.Schema({
    "producto":{
        //type:{productoModel},
        type:String,
        required:true
    },
    "cantidad":{
        type:Number,
        required:true
    },
    "precio total":{
        type:Number,
        required:true
    },
    "cliente":{
        //type:{clienteModel},
        type:String,
        required:true
    },
    //"tipo":"Carrito"
})

export default mongoose.model("carrito",carritoModel)