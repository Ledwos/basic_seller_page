const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

//needed to connect to all files in the folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname + '/public/index.html')));

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/info', (req, res) => {
    let name = req.query.name
    let price = req.query.price
    let description = req.query.description
    // console.log(req.query)
   res.render('seller_page.pug', {name: name, price: price, description: description});

});