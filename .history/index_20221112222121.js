const app = require('./app')

async function Main(){
    await app.listen('3000')
    console.log('Esta escuchando por el puerto 3000')
}

Main()