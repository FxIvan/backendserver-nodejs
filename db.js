const mongoose = require('mongoose')

const MONGO_URL = `mongodb+srv://almendra:y8wER3WnvUg.vfw@dbprogramas.om4w0.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    console.log('Conexion Establecida con mongo')
})
.catch(err=>{
    console.log('Error: ', err)
})