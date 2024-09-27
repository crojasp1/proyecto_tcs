const express = require("express");
const productController = require("../controllers/productController");
const clientController= require("../controllers/clientController");

const bodyParser = require("body-parser");

const PORT = 8087;

const router = express.Router();
router.use(bodyParser.json());

//Obteniendo todos los productos
router.get("/allcars", productController.getAllCars);

// Creando auto
router.post("/addcar", productController.addCar);
  
//Subiendo imagen
router.post("/upload", productController.upload.single("image"), (req, res) => {
  res.json({
    success: 1,
    image_url:`http://localhost:${PORT}/images/${req.file.filename}`
  })
})

//Update
router.put("/car/:id", productController.update);


//----------------------Rutas de los Clientes...............................---------------

  // Obteniendo todos los clientes:
  router.get("/allClient", clientController.getAllClient);

  // Creando cliente:
  router.post("/addClient", clientController.createClient);

  // Actualizando cliente:
  router.put("/client/:idClient", clientController.update);






module.exports = router;