const app = require('./app')

async function Main(){
    await app.listen('3001')
    console.log('Esta escuchando por el puerto 3001')
}

Main()