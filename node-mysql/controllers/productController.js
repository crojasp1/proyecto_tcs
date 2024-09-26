const express = require("express");
const carTable = require("../models").car;
const bodyParser = require("body-parser");


const router = express.Router();
router.use(bodyParser.json());

const multer = require("multer");
const path = require("path");
const { send } = require("process");

//Get ALL CARS
const getAllCars = async (req, res) =>{
  let car = await carTable.findAll({});
  console.log("Todos los productos obtenidos")
  res.send(car);
}

// CRUD: Post
const addCar = async (req, res) => {

    carTable.create({
      plate: req.body.plate,
      marca: req.body.marca,
      modelo: req.body.modelo,
      version: req.body.version,
      kilometers: req.body.kilometers,
      capacity: req.body.capacity,
      description: req.body.description,
      image: req.body.image,
      idClient: req.body.idClient
    }).then((success) => {
      res.json({
        status: true,
        message: "Carro creado con éxito"
      });
    }).catch((error) => {
      console.error("Error al crear carro:", error); // Mostrar error
      res.json({
        status:false,
        message: "Error al crear carro",
        error: error.message // Incluir el mensaje de error en la respuesta para depuración
      })
    })
  }

  //Actualizar
  const update = async (req, res) =>{

    const updated = await carTable.update({plate:req.body.plate},{where: { id: req.params.id } })
    .then((success) =>{
      res.send(updated);
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

// Controlador de carga de la imagen
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({
  storage:storage
});



module.exports = {
  upload,
  addCar,
  getAllCars,
  update
}