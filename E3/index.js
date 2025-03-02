const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Trang chủ
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1><p>This is the home page.</p>");
});

// Trang About
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1><p>Information about this app.</p>");
});

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
