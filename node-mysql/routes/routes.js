const express = require("express");
const productController = require("../controllers/productController");
const bodyParser = require("body-parser");
const CarTable = require("../models/car").Car;


const PORT = 8087;

const router = express.Router();
router.use(bodyParser.json());

//Pagina de bienvenida
router.get("/", (req, res) =>{
  res.json({
    "status":true,
    "message":"Node conectado, Bienvenido a las APIs"
  })
});

// Creando auto
router.post("/addcar", (req, res) =>{

  CarTable.create({
    plate: req.body.plate,
    marca: req.body.marca,
    modelo: req.body.modelo,
    version: req.body.version,
    kilometers: req.body.kilometers,
    capacity: req.body.capacity,
    description: req.body.description,
    image: req.body.image
  }).then((success) =>{
    res.json({
      status:true,
      message:"Carro creado con exito"
    });
  }).catch((error) => {
    res.json({
      status:false,
      message:"Solicitud fallida, no se creo tabla"
    })
  })
  
});

//Subiendo imagen
router.post("/upload", productController.upload.single("image"), (req, res) => {
  res.json({
    success: 1,
    image_url:`http://localhost:${PORT}/images/${req.file.filename}`
  })
})




module.exports = router;