const express = require("express");
const path = require("path");
const app = express();

// Cấu hình thư mục views và engine hbs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Hàm tạo danh sách ngẫu nhiên
let getRandomList = () => {
  let list = ["Ada", "Turing", "Lovelace", "Neumann", "Grace Hopper"];
  let limit = Math.floor(Math.random() * list.length);
  return list.slice(limit);
};

// Route chính
app.get("/", (req, res) => {
  let peopleList = getRandomList();
  res.render("index", { people: peopleList });
});

// Chạy server
app.listen(5000, () => {
  console.log("🚀 Server is running at http://localhost:5000");
});
