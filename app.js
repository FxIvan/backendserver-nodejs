const express = require('express')
const app = express()
const cors = require('cors')
require('./db')
require('./spec/query-db')

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Estas dentro de mi pagina')
})

app.use('/apidataform', require('./routes/formRoute'))
app.use('/sendingdata/client' , require('./routes/dataRoute'))
app.use('/contacto/data' , require('./routes/contacto'))
app.use('/v1/register/user', require('./routes/register'))

module.exports = app
