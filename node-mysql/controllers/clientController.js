const express = require("express");
const bodyParser = require("body-parser");
const clientTable = require("../models").Client;


const router = express.Router();
router.use(bodyParser.json());

const path = require("path");

const getAllClient = async (req,res)=>{
let client = await clientTable.findAll({}).then((succes)=>{res.send(client);console.log(succes)}).catch((error) => {
      console.error("Error al crear carro:", error); // Mostrar error
      res.json({
        status:false,
        message: "Error al crear carro",
        error: error.message // Incluir el mensaje de error en la respuesta para depuración
    })});

}

module.exports={
    getAllClient
}