const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const session = require('express-session')
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'salt for cookie signing',
}));
app.get('/', (req, res) => {
    const date_ob = new Date();
    const hours = date_ob.getHours();
    let style = "night.css";
    if (hours >= 6 && hours < 18) {
        style = "day.css";
    }
    res.send(`
    <!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset="utf-8">
            <title>Name and age</title>
            <link rel="stylesheet" href="css/${style}">
        </head>
        <body>
            <form method="post" action="result">
                Name <input name="name">
                Age <input name="age">
                <input type="submit">
            </form>
        </body>
    </html>`);
});
app.post('/result', (req, res) => {
    req.session.name = req.body.name;
    req.session.age = req.body.age;

    res.redirect(url.format({
        pathname: "/output"
    }));
});

app.get('/output', function (req, res) {
    let name = req.session.name;
    let age = req.session.age;

    res.send(`Welcome ${name}. Age: ${age}`);
});

app.listen(3000);