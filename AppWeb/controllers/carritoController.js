import carritoModel from "../models/carritoModel.js"

export async function createCarrito(req,res){
    const carrito=req.body

    let documento = null
    try {
        documento = await carritoModel.create(carrito)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(201).json(documento)
}

export async function readCarrito(req,res){

    const{nombre}= req
    let documento = null
    try {
        documento = await carritoModel.find({nombre},{"_id":0})
    } catch (error) {
        res.status(400).json(error.message)
    }
    res.status(200).json(documento)
}

export async function updateCarrito(req,res){

    const {nombre,updates} = req.body

    let documento = null

    try {
        documento = await carritoModel.findOneAndUpdate({"nombre":nombre},updates)
    } catch (error) {
         res.status(400).json(error.message)   
         return
    }
    res.status(200).json(documento)
}

export async function deleteCarrito(req,res){

    const{nombre} = req.body

    let documento = null

    try {
        documento = await carritoModel.findOneAndDelete({"nombre":nombre})
    } catch (error) {
         res.status(400).json(error.message)   
    }
    res.status(200).json(documento)
}