const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const PictureController = require("../controllers/pictureController");

router.post("/save", upload.single("file"), PictureController.create);
router.get("/findall", PictureController.findAll);
router.delete("/delete/:id", PictureController.remove);

module.exports = router;
