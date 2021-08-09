const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/output', (req, res) => {
  
    res.render("output",{
        Name: req.body.name,
        Age: req.body.age,
    });
});

app.listen(3000);