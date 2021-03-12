const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('static')); // CSS

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.get('/products',(req,res)=>{
  res.sendFile(path.join(__dirname, 'static', 'products.html')); // products site
})

app.post('/', (req,res) =>{
  console.log(req.body);
  res.redirect('/products')
  // database work here
  res.json({success : true});
});

app.listen(3000);
