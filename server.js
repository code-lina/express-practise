const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json({extended: true}));


let cartItems = [];



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.get("/cart.html", function(req, res){
    res.set("Content-Type", "text/html");
    res.sendFile(__dirname + "/cart.html");
  });




app.get("/styles.css", function(req, res){
    res.set("Content-Type", "text/css");
    res.sendFile(__dirname + "/styles.css");
  });


app.get("/index.js", function(req, res) {
    res.set("Content-Type", "application/javascript");
    res.sendFile(__dirname + "/index.js");
  });



 
  app.post('/cart', (req, res) => {
    const { productId } = req.body;
    const product = getProductById(productId);
 
    if (product) {
      cartItems.push(product);
      res.json({ message: `Product ${productId} added to cart.` });
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  });
 
// Retrieve cart items 
app.get('/cart', (req, res) => {
    const cartItemsWithDetails = cartItems.map((itemId) => getProductById(itemId));
    res.json({ cartItems: cartItemsWithDetails });
  });

  app.delete('/cart', (req, res) => {
    cartItems = [];
    res.json({ message: 'Cart cleared.' });
  });
 



app.listen(3000, function() {
  console.log("Server running on port 3000");
});