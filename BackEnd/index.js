const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server Started Successfully",
    });
});

app.listen(PORT, () => {
    console.log(`Port ${PORT} Running`);
});
