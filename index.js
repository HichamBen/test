const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.static("pages"));

app.put(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "gallery", maxCount: 1 },
    { name: "images[0]", maxCount: 1 },

  ]),
  (req, res) => {
    console.log(req.files, "*******************************");
    console.log(req.body.export);
    res.status(200).json("Ok!");
  }
);

app.listen(5000, () => {
  console.log("The server is runing on port 3000");
});
