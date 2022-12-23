import mongoose from "mongoose";

const productoModel = mongoose.Schema({
    "nombre":{
        type:String,
        required:true
    },
    "marca":{
        type:String,
        required:true
    },
    "categoria":{
        type:String,
        required:true
    },
    "precio":{
        type:Number,
        required:true
    },
    //"tipo":"administrador"
})

export default mongoose.model("producto",productoModel)