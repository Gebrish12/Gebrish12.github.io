const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString(),
        style: date.getHours >= 6 && date.getHours<=18 ? 'day.css':'night.css',
    });
});

app.listen(3000);