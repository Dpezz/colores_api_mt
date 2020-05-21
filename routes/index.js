const express = require("express");
const cors = require("cors");
const router = express.Router();

const colorController = require("../app/controllers/color");

router.use(cors());

// index
router.get("/", (req, res) => {
    res.send("welcome to API!");
});

// colors
router.get("/colors", colorController.all);
router.get("/colors/:id", colorController.show);
router.post("/colors", colorController.store);

module.exports = router;
