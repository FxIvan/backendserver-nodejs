const app = require('./app')

async function Main(){
    await app.listen('301')
    console.log('Esta escuchando por el puerto 301')
}

Main()