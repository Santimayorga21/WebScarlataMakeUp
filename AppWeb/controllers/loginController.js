import adminModel from "../models/adminModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const ACCESS_TOKEN ="e9f4197fb234cbd1167217d026c1951f48cd29c8e6cd2c1d96c9f3da286c79eecb1ed741880b038173900c1a9b324c8ab924ba457d9bb1c33fd59793a9684670"

export async function login(req,res){

    const {nombre, password} = req.headers

    if (nombre == null || password == null)return res.sendStatus(401)

    let document

    try {
        document = await adminModel.findOne({nombre})
    } catch (error) {
        response.status(400).json(error.message)
        return
    }

    if (document == null) return res.sendStatus(401)

    if(await bcrypt.compare(password, document.contraseña)){
        const token = jwt.sign(nombre,ACCESS_TOKEN)
        res.json({token})
    } else {
        return res.sendStatus(401)
    }
}