const nombre = process.argv[2]
const express = require('express')
const app = express()
const formSchema = require('../models/formSchema')

const moment = require('moment')
let currentTime = moment().format('hh:mm:ss')

const fs = require('fs')
const logHTTP = fs.createWriteStream(__dirname + '/qry_consulta.log',{flags:'a'} )

const morgan = require('morgan')

app.use(morgan({stream:logHTTP}))

const qry_queryName = async() =>{
   await formSchema.find({name:`${nombre}`}).exec((err,date)=>{

    const statusqry = false

    const salidaMP = date.map(dtname=>{
        return dtname.name
    })

    if(salidaMP[0] === nombre){
        date.map(date => logHTTP.write( currentTime  + `: | MSG | El telefono del usuario ${date.name} es -> ${date.telephone} \n`))
        process.kill(process.pid, 'SIGTERM')
    }else{
        logHTTP.write( currentTime + `: | ERR | No se encontro el usuario ${nombre} \n`)
        logHTTP.write( currentTime + `: | ERR | ${err} \n`)
        process.kill(process.pid, 'SIGTERM')
    }

})
    
}

qry_queryName()

module.exports = app