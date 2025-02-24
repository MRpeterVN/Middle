const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});
conn.connect();
conn.query("SELECT * FROM users", (err, results) => console.log(results));
