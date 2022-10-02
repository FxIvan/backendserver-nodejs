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

module.exports = app
