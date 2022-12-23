import adminModel from "../models/adminModel.js"
import bcrypt from "bcrypt"


//Create
export async function createAdmin(req,res){
    const admin = req.body

    const {contraseña} = admin
    const salt = await bcrypt.genSalt(10)
    const contraseñaEncriptada = await bcrypt.hash(contraseña,salt)
    admin.contraseña = contraseñaEncriptada

    let documento = null;
    try {
        documento = await adminModel.create(admin)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(201).json(documento)
}

//Read
export async function readAdmin(req,res){

    const {nombre} = req
    let admin = null
    try {
        admin = await adminModel.find({nombre},{"-id":0})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(200).json(admin)
}

//Update
export async function updateAdmin(req,res){

    const{nombre,updates} = req.body

    let documento = null

    try {
        documento = await adminModel.findOneAndUpdate({"nombre":nombre},updates,{runValidators:true})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(200).json(documento)
}

//Delete
export async function deleteAdmin(req,res){
    const{nombre} = req.body
    let documento = null
    try {
        documento = await adminModel.findOneAndDelete({"cliente":nombre})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(200).json(documento)
}