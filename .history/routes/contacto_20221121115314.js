const {Router} = require('express')
const router = Router()
const contactSchema = require('../models/contactoSchema')

router.route('/')
.get(async(req,res)=>{
    await contactSchema.find()
    res.json({message:'contacto'})
})
.post(async(req,res)=>{
    const { frm_nombre , frm_cel , frm_email , frm_consulta } = req.body

    const newContactSchema = new contactSchema({
        frm_nombre,
        frm_cel,
        frm_email,
        frm_consulta
    })

    newContactSchema.save()
    .then(()=>{
        res.status(200).json({message:'Consulta enviada exitosamente', estado:'ok'})
    })
})

module.exports = router