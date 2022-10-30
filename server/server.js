const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config({ path: "./config.env" });

const mongoose = require("mongoose");
const port = process.env.PORT || 5001;
const uri = "mongodb+srv://bennysun:Password@cluster0.0ahdwtf.mongodb.net";


require("dotenv").config({ path: "./config.env" });
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./routes/movie"));
app.use(require("./routes/genre"));
app.use(require("./routes/famous"));
app.use(require("./routes/crew"));
app.use(require("./routes/info"));
app.use(require("./routes/betmovie"));
app.use(require("./routes/user"));
app.use(require("./routes/bet"));

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
  
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongoose Connected Successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

app.get("/", (req, res) => {
    res.send("Hello");
})