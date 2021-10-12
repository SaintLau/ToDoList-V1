const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  let today = new Date();

  let currentDay = today.getDay();

  //0 -> Sunday; 1 to 5 -> Monday until Friday, 6 -> Saturday
  if (currentDay === 6 || currentDay === 0) {
      res.send("Yay! It's weekend!");
  } else {
      res.sendFile(__dirname + "/index.html");
  }

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});