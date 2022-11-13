const {Router} = require('express')
const router = Router()
const contactSchema = require('../models/contactoSchema')

router.route('/')
.post(async(req,res)=>{
    const { frm_nombre , frm_cel , frm_email , frm_consulta } = req.body

    const newContactSchema = new contactSchema({
        frm_nombre,
        frm_cel,
        frm_email,
        frm_consulta
    })

    newContactSchema.save()
    .then(resStatus=>{

    })
})

module.exports = router