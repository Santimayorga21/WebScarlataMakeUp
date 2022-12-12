import mongoose from "mongoose";

const adminModel = mongoose.Schema({
    "nombre":{
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
    "contraseña":{
        type:String,
        required:true
    },
    //"tipo":"administrador"
})

export default mongoose.model("admin",adminModel)