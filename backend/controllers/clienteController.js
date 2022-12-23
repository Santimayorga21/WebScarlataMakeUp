import clienteModel from "../models/clienteModel.js"

export async function createCliente(req,res){
    const cliente=req.body

    let documento = null
    try {
        documento = await clienteModel.create(cliente)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(201).json(documento)
}

export async function readCliente(req,res){

    const{nombre}= req
    let documento = null
    try {
        documento = await clienteModel.find({nombre},{"_id":0})
    } catch (error) {
        res.status(400).json(error.message)
    }
    res.status(200).json(documento)
}

export async function updateCliente(req,res){

    const {nombre,updates} = req.body

    let documento = null

    try {
        documento = await clienteModel.findOneAndUpdate({"nombres":nombre},updates)
    } catch (error) {
         res.status(400).json(error.message)   
         return
    }
    res.status(200).json(documento)
}

export async function deleteCliente(req,res){

    const{nombre} = req.body

    let documento = null

    try {
        documento = await clienteModel.findOneAndDelete({"nombre":nombre})
    } catch (error) {
         res.status(400).json(error.message)   
    }
    res.status(200).json(documento)
}