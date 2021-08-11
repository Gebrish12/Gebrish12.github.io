const express = require('express');
const path = require('path');
const url = require('url');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));
const mobile = [
    { id: 1, name: 'iphone 11', description: '128GB', price: '$1000' },
    { id: 2, name: 'iphone 8', description: '64GB', price: '$800' },
    { id: 3, name: 'iphone 7', description: 'Description', price: '$700' }]
const laptop = [
    { id: 1, name: 'DELL', description: '512GB', price: '$850' },
    { id: 2, name: 'HP', description: '512GB', price: '$900' },
    { id: 3, name: 'Mac Air', description: '128GB', price: '$1000'}
]


app.use(function (req, res, next) {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    next();
});
app.get('/product', (req, res)=>{
    res.render('products', {
        productss: [...mobile, ...laptop],
         count: getTotalCount(req.session.cart),
        
    })
})
app.get('/product/:productName/:id', (req, res) => {
    if (req.params.productName === 'mobile') {
        res.render("product_to_order", {
           // products: mobile,
            
            ...mobile.find(e => e.id === parseInt(req.params.id)),
            count: getTotalCount(req.session.cart),
            productss: [...mobile, ...laptop],
        });
    }
    else if (req.params.productName === 'laptop') {
        res.render("product_to_order", {
          //  products:laptop,
            
            ...laptop.find(e => e.id === parseInt(req.params.id)),
            count: getTotalCount(req.session.cart),
            productss: [...mobile, ...laptop],
        });
    }
});
app.post('/addToCart', (req, res) => {
    let item = req.body;
    let isAvailable = req.session.cart[item.name];
    if (isAvailable) {
        isAvailable.quantity += 1;
    }
    else {
        item.quantity = 1;
        req.session.cart[item.name] = item;
    }
    res.status(200);
    res.json({ "total": getTotalCount(req.session.cart) });
})
app.get('/', (req, res) => {
    res.render("shoppingcart", {
        products: req.session.cart,
        count: getTotalCount(req.session.cart),
        productss: [...mobile, ...laptop],
    });
});
function getTotalCount(obj) {
    let quantity = 0;
    for (key in obj) {
        quantity += obj[key].quantity;
    }
    return quantity;
}



app.listen(3000);