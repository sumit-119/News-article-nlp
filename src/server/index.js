const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Aylien = require("aylien_textapi");

const PORT = 8000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("dist"));

const textapi = new Aylien({
  application_id: "3c0854cd",
  application_key: "ea3dacd7379026b9a99fbf2e7980f3b0"
});


app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/textTest", (req, res) => {
  const text = req.body.text;
  textapi.sentiment({
    text: text
  }, (error, result, remaining) => {
    res.send(result);
  });
});

app.post("/newsArticleTest", (req, res) => {
  const text = req.body.text;
  textapi.sentiment({
    url: text
  }, (error, result, remaining) => {
    res.send(result);
  });
});



app.listen(PORT, () => console.log(`Aylien app listening on port ${PORT}!`));