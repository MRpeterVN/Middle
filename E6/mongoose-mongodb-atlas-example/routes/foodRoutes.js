const express = require("express");
const mongoose = require("mongoose");
const Food = require("../models/food");

const router = express.Router();

// ✅ Xem danh sách thực phẩm (GET /foods)
router.get("/foods", async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json({ success: true, data: foods });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
});

// ✅ Thêm thực phẩm mới (POST /add)
router.post("/add", async (req, res) => {
    try {
        if (!req.body.name || !req.body.calories) {
            return res.status(400).json({ success: false, message: "Name and calories are required" });
        }

        const food = new Food(req.body);
        await food.save();
        res.status(201).json({ success: true, data: food });
    } catch (error) {
        res.status(400).json({ success: false, message: "Failed to add food", error: error.message });
    }
});

// ✅ Cập nhật thông tin thực phẩm (PATCH /edit/:id)
router.patch("/edit/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!food) return res.status(404).json({ success: false, message: "Food not found!" });

        res.status(200).json({ success: true, data: food });
    } catch (error) {
        res.status(400).json({ success: false, message: "Failed to update food", error: error.message });
    }
});


// ✅ Xóa thực phẩm theo ID (DELETE /delete/:id)
router.delete("/delete/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) return res.status(404).json({ success: false, message: "Food not found!" });

        res.status(200).json({ success: true, message: "Food deleted successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete food", error: error.message });
    }
});

module.exports = router;
