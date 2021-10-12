const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


//for ejs:
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let today = new Date();

  let currentDay = today.getDay();
  let day = "";


    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;

        default:
            console.log("Error: current day is equal to: " + currentDay); //-> to see what cause the error 
}
  res.render("list", {
      kindOfDay: day
    }); //-> list is the doc that needs to exict inside the views. kindOfDay is the key in the list doc to where we want to send data. The data we want to send is inside the day var. In these case we can render at the end of the if statement 

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});