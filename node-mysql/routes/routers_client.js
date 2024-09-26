const express = require("express");
const clientController= require("../controllers/clientController");
const bodyParser = require("body-parser");

const PORT = 8087;

const router = express.Router();
router.use(bodyParser.json());


//router.get("/allClient", clientController.getAllClient);


//router.post("/addClient", /*clientController.getAllCars*/);
  


//Update
//router.put("/:id", clientController.update);




module.exports = router;