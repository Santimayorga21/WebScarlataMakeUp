import productoModel from "../models/productoModel.js"

export async function createProducto(req,res){
    const producto=req.body

    let documento = null
    try {
        documento = await productoModel.create(producto)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(201).json(documento)
}

export async function readProducto(req,res){

    const{nombre}= req
    let documento = null
    try {
        documento = await productoModel.find({nombre},{"_id":0})
    } catch (error) {
        res.status(400).json(error.message)
    }
    res.status(200).json(documento)
}

export async function updateProducto(req,res){

    const {nombre,updates} = req.body

    let documento = null

    try {
        documento = await productoModel.findOneAndUpdate({"nombres":nombre},updates)
    } catch (error) {
         res.status(400).json(error.message)   
         return
    }
    res.status(200).json(documento)
}

export async function deleteProducto(req,res){

    const{nombre} = req.body

    let documento = null

    try {
        documento = await productoModel.findOneAndDelete({"nombre":nombre})
    } catch (error) {
         res.status(400).json(error.message)   
    }
    res.status(200).json(documento)
}