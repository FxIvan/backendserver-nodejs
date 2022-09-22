const { Schema, model } = require("mongoose");

const formData = new Schema({
    name : String,
    email : String,
    telephone : Number
})

const formSchema = model('formDataApi' , formData)

module.exports = formSchema