const { Router } = require('express')
const router = Router()
const formSchema = require('../models/formSchema')
//process -> agarra parametro del que le pasamos a la terminal
const nombre = process.argv[2]

router.route('/')
.post(async(req,res)=>{
    const {frm_email, frm_fullname , frm_telehpone} = req.body

    const dbForm = new formSchema({
        name : frm_fullname,
        email : frm_email,
        telephone : frm_telehpone
    })

    dbForm.save()
})

module.exports = router

