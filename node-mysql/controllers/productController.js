const db = require("../models");


const multer = require("multer");
const path = require("path");

// Creando modelo principal
const Car = db.Car;

// CRUD: CREATE
const addCar = async (req, res) => {

  const car = new Car({
    plate: req.body.plate,
    marca: req.body.marca,
    modelo: req.body.modelo,
    version: req.body.version,
    kilometers: req.body.kilometers,
    capacity: req.body.capacity,
    description: req.body.description,
    image: req.body.image
  });
  console.log(car);
  await car.save();
  console.log("carro nuevo agregado");
  res.json({
    success: true,
    name: req.body.marca
  })
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
  addCar
}