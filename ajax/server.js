const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const now = new Date

app.get('/teste', (req, res) => res.send(
    'Executando... ' +  
    'http://localhost:9004' + ' - ' +
    now.getDate() + '/' + 
    (now.getMonth() + 1) + '/' + 
    now.getFullYear() +' - ' + 
    now.getHours() +':' + 
    now.getMinutes()))

app.listen(9004, () => console.log(
    'Executando... ' +  
    'http://localhost:9004' + ' - ' +
    now.getDate() + '/' + 
    (now.getMonth() + 1) + '/' + 
    now.getFullYear() +' - ' + 
    now.getHours() +':' + 
    now.getMinutes()))