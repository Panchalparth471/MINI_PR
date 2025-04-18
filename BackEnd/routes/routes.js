const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth");
const { resumeBuilder } = require("../controllers/resumeBuilder");
const { coverLetterBuilder } = require("../controllers/coverLetterGenerator");

router.post("/coverLetterBuilder", coverLetterBuilder);
router.post("/login", login);
router.post("/signup", signup);
router.post("/resumeBuilder", resumeBuilder);



module.exports = router;
