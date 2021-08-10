const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');

//app.set('views', path.join(__dirname, "view"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let output = '<table>  <thead> <tr> <th>Key</th> <th>Value</th> </tr > </thead >'
    for (let key in req.cookies) {
        output += "<tr><td>" + key + "</td><td>" + req.cookies[key] + "</td></tr>";
    }
    output += '</table>';
    output += `<form action="add" method="post">
                     <label>Key: <input name="key" type="text"></label>
                           <label>Value: <input name="value" type="text"></label>
                                 <button type="submit">Add Cookie</button>
           </form>`
    res.send(output);

    
    
});

app.post('/add', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
});

app.listen(3000);