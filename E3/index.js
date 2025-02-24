const express = require("express");
const app = express();

// Cấu hình cổng chạy ứng dụng
const PORT = process.env.PORT || 3000;

// Middleware xử lý JSON
app.use(express.json());

// Route chính
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World from E3 🚀" });
});

// Chạy server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
