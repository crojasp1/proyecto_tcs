// db/mysql.js
const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: "mysqldb",
  user: "root",
  password: "112529",
  port: 3306, // Internamente MySQL usa 3306, asegúrate que este sea el puerto correcto dentro de Docker
});

module.exports = pool;
