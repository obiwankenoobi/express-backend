//const { Provider } = require("../../db/models/ProviderSchema");
const { mongoose } = require("../db/mongoose");
const fs = require("fs");

class Image {
  // method to stream image from database
  static getImage(req, res, next) {
    const { file_name } = req.params;
    try {
      const gridfs = require("mongoose-gridfs")({
        collection: "fs",
        model: "files",
        mongooseConnection: mongoose.connection
      });

      Attachment = gridfs.model;
      const stream = Attachment.readByFileName(file_name);
      stream.on("error", () => {
        console.log("error here");
        // show default image on error
        const stm = fs.createReadStream(
          "./assets/img/pexels-photo-668196.jpeg"
        );

        stm.on("error", error => {
          res.status(500).json({ error, message: "Server error" });
        });
        stm.on("readable", () => stm.pipe(res));
      });
      stream.pipe(res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = { Image };
