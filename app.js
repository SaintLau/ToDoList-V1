const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js"); //requiring the module created



//for ejs:
app.set('view engine', 'ejs');

//for body parser
app.use(bodyParser.urlencoded({extended: true}));

//to use other files, like css
app.use(express.static("public"));

//variables to store data
const items = []; //need to declare at the top and reset later the value otherwise app will crash due to scope
const workItems = [];

app.get('/', (req, res) => {
  
    const day = date.getDate(); //-> from the module created, calling the function 

    res.render("list", {
        listTitle: day,
        newListItems: items
    }); //-> list is the doc that needs to exict inside the views. kindOfDay is the key in the list doc to where we want to send data. The data we want to send is inside the day var. Second pair refer to add new items to the list  
});

app.post('/', (req, res) => {

    const item = req.body.newItem;

    //list is from the name given to the btn
    if(req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get('/work', (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post('/work', (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});