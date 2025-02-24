const express = require("express");
const app = express();

// Middleware (Xử lý trước khi đến các route)
app.use((req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    next(); // Chuyển tiếp đến route tiếp theo
});

// Route chính
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Tạo nhiều route
app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page!");
});

// API với POST
app.use(express.json()); // Middleware để parse JSON
app.post("/api/data", (req, res) => {
    const data = req.body; // Lấy dữ liệu từ body của request
    console.log("Data received:", data);
    res.json({ message: "Data received successfully!", data });
});

// Xử lý route không tồn tại (404)
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});