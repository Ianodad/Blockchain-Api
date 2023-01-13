const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/blockchain", function (req, res) {
  res.send(bitcoin);
});

app.post("/transaction", function (req, res) {
  const {amount, sender, recipient} = req.body;
  
  bitcoin.createNewTransaction(amount, sender, recipient);
});

app.get("/mine", function (req, res) {});

app.listen(8000, function name() {
  console.log("listening on 8000....");
});
