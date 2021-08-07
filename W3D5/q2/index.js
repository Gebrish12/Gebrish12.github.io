// JavaScript source code
const express = require('express');
const app = express();

/** Decode Form URL Encoded data */
app.use(express.urlencoded());

/** Show page with a form */
app.get('/', (req, res) => {
    res.send(`<form method="POST" action="/result">
  <label>Name</label>
  <input type="text" name="name" placeholder="username">
  <label>Age</label>
  <input type="number" name="age" placeholder="age">
  <input type="submit" value="Submit Query">
</form>`);
});

/** Process the request */
app.use('/result', (req, res) => {
    let { name, age } = req.body;
    res.send(`Welcome ${name} your age is ${age}`);
});

app.listen(3000);