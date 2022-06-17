const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const now = new Date

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

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
