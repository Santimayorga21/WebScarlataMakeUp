import  jwt from "jsonwebtoken"
const ACCESS_TOKEN ="e9f4197fb234cbd1167217d026c1951f48cd29c8e6cd2c1d96c9f3da286c79eecb1ed741880b038173900c1a9b324c8ab924ba457d9bb1c33fd59793a9684670"
export default (req,res,next) => {
    
    const {token} = req.headers

    let nombre

    try {
        nombre = jwt.verify(token,ACCESS_TOKEN)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    console.log(nombre);
    req.nombre = nombre
    
    next()
}
