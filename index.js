const app = require('./app')

async function Main(){
    await app.listen('8000')
    console.log('Esta escuchando por el puerto 8000')
}

Main()