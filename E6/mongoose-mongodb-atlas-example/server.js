const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes");

const app = express();
app.use(express.json());

// ✅ Kết nối MongoDB Atlas
mongoose.connect(
    "mongodb+srv://anlt21it:motmotlahai@cluster0.weevc.mongodb.net/ProductDB2?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("✅ Connected to MongoDB Atlas"))
 .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Đăng ký routes
app.use(foodRouter);

app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
});
