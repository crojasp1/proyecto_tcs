const express = require("express");
const clientTable = require("../models").client;
const bodyParser = require("body-parser");
const { where } = require("sequelize");


const router = express.Router();
router.use(bodyParser.json());


const getAllClient = async (res, req) => {
    try{
        let clients = await clientTable
        .findAll({});
        //res.status(200).json(clients)
        res.json({
            status: true,
            message: "Clientes obtenidos con éxito",
            send: clients
          });
        console.log("Clientes Obtenidos")
    }catch(error){
        res.json({
            status: false,
            message: "Clientes no obtenidos",
            error: error.message
        });
        console.error("Error clientes:", error);
    }

};

//Creando cliente

    const createClient =  (req, res) => {

        console.log(req.body);           

           clientTable.create({
            idClient: req.body.idClient,
            name: req.body.name,
            idEvent: req.body.idEvent,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            created_at: req.body.created_at,
            category: req.body.category
        }).then((success) => {
            res.json({
                status: true,
                message: "Cliente creado exitosamente"
            });
            console.log("Cliente creado exitosamente")
            console.log(success);
        }).catch((error) =>{
            res.json({
                status: false,
                message: "Error al crear cliente",
                error: error.message
            });
            console.error("/////////////// Error al crear cliente:", error);
        });
    };

    // Creando funcion para UPDATE

    const update =  (req, res) => {
        let clienteBuscado = clientTable.update({name:req.body.name, age:req.body.age, email:req.body.email},{where: { idClient: req.params.idClient }})
        .then((success) =>{
            res.send(clienteBuscado);
            console.log(success);
          }).catch((error) => {
            console.error("Error al crear carro:", error); // Mostrar error
            res.json({
              status:false,
              message: "Error al crear carro",
              error: error.message // Incluir el mensaje de error en la respuesta para depuración
          });
        });
        
          }

module.exports = {
  getAllClient,
  createClient,
  update
};
