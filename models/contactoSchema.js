const {Schema, model} = require('mongoose')


const contactSchema = new Schema({
    frm_nombre:String,
    frm_cel:Number,
    frm_email:String,
    frm_consulta:String,
    date: { type: Date, default: Date.now }
})

const contactoSchema = model('contacto',contactSchema)

module.exports = contactoSchema