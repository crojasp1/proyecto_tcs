const { createPool } = require("mysql2/promise");
const express = require("express");
const appRoutes = require("./routes/routes");
const bodyParser = require("body-parser");

const pool = createPool({
  host: "mysqldb",
  user: "root",
  password: "112529",
  port: 3307,
});

const PORT = 8087;

const app = express();

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result[0]);
});

//routers
app.use(bodyParser.json());
app.use("/", appRoutes);

//folder de imagenes estaticas
app.use("/images", express.static("upload/images"));

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`::::::Aplicación inicializada en el puerto ${PORT}`);
});
