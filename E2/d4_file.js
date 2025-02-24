const fs = require("fs");

// 1. Đọc file
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Lỗi khi đọc file:", err.message);
    } else {
        console.log("Nội dung file:");
        console.log(data);
    }

    // 2. Ghi file
    fs.writeFile("test.txt", "Hello Node.js!", (err) => {
        if (err) {
            console.error("Lỗi khi ghi file:", err.message);
        } else {
            console.log("File đã được ghi thành công!");

            // 3. Xóa file
            fs.unlink("test.txt", (err) => {
                if (err) {
                    console.error("Lỗi khi xóa file:", err.message);
                } else {
                    console.log("File đã bị xóa thành công!");
                }
            });
        }
    });
});