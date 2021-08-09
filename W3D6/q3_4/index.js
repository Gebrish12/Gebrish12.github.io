const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
const mobile = [
    { id: 1, name: 'iphone 11', description: '128GB', price: '$1000' },
    { id: 2, name: 'iphone 8', description: '64GB', price: '$800' },
    { id: 3, name: 'iphone 7', description: 'Description', price: '$700' }]
const laptop = [
    { id: 1, name: 'DELL', description: '512GB', price: '$850' },
    { id: 2, name: 'HP', description: '512GB', price: '$900' },
    { id: 3, name: 'Mac Air', description: '128GB', price: '$1000'}
]

const CART = [
    { name: 'iphone 11', price: '$1000', quantity: 1 },
    { name: 'iphone 7', price: '$1400', quantity: 2 },
    { name: 'DELL', price: '$850', quantity: 1 }]
app.get('/product', (req, res)=>{
    res.render('products', {
        products: [...mobile, ...laptop]
        
    })
})
app.get('/product/:userQuery/:id', (req, res) => {
    if (req.params.userQuery === 'mobile') {
        res.render("product_to_order", {
           // products: mobile,
             ...mobile.find(e => e.id === parseInt(req.params.id)),
        });
    }
    else if (req.params.userQuery === 'laptop') {
        res.render("product", {
          //  products:laptop,
             ...laptop.find(e => e.id === parseInt(req.params.id)),
        });
    }
    });
app.get('/cart', (req, res) => {
    res.render("shoppingcart", {
        products: CART
    });
});



app.listen(3000);