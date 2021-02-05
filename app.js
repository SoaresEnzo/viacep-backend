const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buscaCep = require('./src/functions/buscaCep')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/envia-cep',async (req,res)=>{
    const { uf,cidade,rua } = req.body;
    const resultado = buscaCep(uf,cidade,rua);

    res.render('resultado', {dados: await resultado})
})

app.listen(5000);