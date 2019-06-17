const {
  Image
} = require("../services/image");
const express = require("express");
const router = express.Router();
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
const passport = require("passport");
const storage = new GridFsStorage({
  url: process.env.MONGO_DB_ADDRESS,
  file: (req, file) => file.originalname
});

//uploag images
const upload = multer({
  storage
});
router.post("/upload-new-media", upload.single("photo"), (req, res, next) =>
  res.status(200).json({
    message: "OK"
  })
);

// get image stream
router.get(
  "/get-image/:file_name",
  passport.authenticate("jwt", {
    session: false
  }),
  Image.getImage
);

module.exports = router;