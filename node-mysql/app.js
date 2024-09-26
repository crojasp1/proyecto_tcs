const express = require("express");
const appRoutes = require("./routes/routes");

const bodyParser = require("body-parser");

const PORT = 8087;

const app = express();

//routers
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", appRoutes);


//folder de imagenes estaticas
app.use("/images", express.static("upload/images"));






app.listen(PORT, () =>{
  console.log(`::::::Aplicación inicializada en el puerto ${PORT}`);
});