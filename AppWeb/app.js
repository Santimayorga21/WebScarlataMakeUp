import express from "express";
import mongoose from "mongoose";    
//import testRouter from "./routers/testRouter.js";
import adminRouter from "./routers/adminRouter.js";
import carritoRouter from "./routers/carritoRouter.js";
import loginRouter from "./routers/loginRouter.js";
import clienteRouter from "./routers/clienteRouter.js";
import productoRouter from "./routers/productoRouter.js";

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando correctamente");
})

mongoose.connect("mongodb+srv://WebScarlata:WebScarlata@webscarlattamakeup.pzdqy4v.mongodb.net/WebScarlataMakeUp?retryWrites=true&w=majority", (err)=>{
 if(err){
     console.log(err)    
 }
 else{
     console.log("la conexión con la base de datos ha sido exitosa.")
 }
})

//Middleware
app.use(express.json())
app.use("/admin", adminRouter)
app.use("/login", loginRouter)
app.use("/carrito",carritoRouter)
app.use("/cliente",clienteRouter)
app.use("/producto",productoRouter)
//app.use("/teclientest", testRouter)