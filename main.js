const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM DOCKER");
});

app.listen(3000, () => console.log("Port is running at 3000"));
