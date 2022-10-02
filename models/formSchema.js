const { Schema, model } = require("mongoose");

const formData = new Schema({
    frm_url:String,
    frm_money:Number,
    frm_uala:Boolean,
    frm_mp:Boolean,
    frm_lc:Boolean,
    frm_cvu:Boolean,
    frm_namelast:String,
    frm_number:Number,  
    frm_provincia:String,
    frm_ciudad:String,
    frm_dni:Number,
    frm_verifisi:Boolean,
    frm_verifino:Boolean,
    frm_amountservi:Number,
    date: { type: Date, default: Date.now }
})

const formSchema = model('formDataApi' , formData)

module.exports =  formSchema 