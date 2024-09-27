const express = require("express");
const appRoutes = require("./routes/routes"); // Tus otras rutas
const authRoutes = require("./routes/auth");  // Rutas de autenticación (login y registro)
const bodyParser = require("body-parser");
const pool = require("./db/mysql");
const connectMongoDB = require('./db/mongodb'); // MongoDB connection

const PORT = 8087;

const app = express();

// Conectar a MongoDB
connectMongoDB();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de autenticación
app.use("/auth", authRoutes);

// Otras rutas
app.use("/", appRoutes);

// Folder de imágenes estáticas
app.use("/images", express.static("upload/images"));

app.listen(PORT, () => {
  console.log(`::::::Aplicación inicializada en el puerto ${PORT}`);
});
