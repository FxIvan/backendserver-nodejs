const { Schema, model } = require("mongoose");

const formSolicitudes = new Schema({
    frm_telefono:String,
    frm_email:String,
    frm_nombreyapellido:String,
    frm_direccion:String,
    frm_altura:String,
    frm_piso:String,
    frm_departamento:String,
    frm_provincia:String,
    frm_billetera:String,
    frm_cantidad:String,
    frm_ciudad_option:String,
    date: { type: Date, default: Date.now }
})

const solicitudSchema = model('solicitudesDinero' , formSolicitudes)

module.exports =  solicitudSchema