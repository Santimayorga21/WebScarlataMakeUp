import mongoose from "mongoose";

const clienteModel = mongoose.Schema({
    "nombres":{
        type:String,
        required:true
    },
    "apellidos":{
        type:String,
        required:true
    },
    "cedula":{
        type:Number,
        required:true,
        immutable:true
    },
    "pais":{
        type:String,
        required:true
    },
    "ciudad":{
        type:String,
        required:true
    },
    "direccion":{
        type:String,
        required:true
    },
    "telefono":{
        type:Number,
        required:true
    },
    "correo":{
        type:String,
        required:true
    },
    //"tipo":"Usuario"
})

export default mongoose.model("users",clienteModel)