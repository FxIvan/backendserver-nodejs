const { Router } = require('express')
const router = Router()
const formSchema = require('../models/formSchema')

router.route('/')
.post(async(req,res)=>{
    const {
    frm_url,
    frm_money,
    frm_uala,
    frm_mp,
    frm_lc,
    frm_cvu,
    frm_namelast,
    frm_number,  
    frm_provincia,
    frm_ciudad,
    frm_dni,
    frm_verifisi,
    frm_verifino,
    frm_amountservi} = req.body

    const dbForm = new formSchema({
        frm_url,
        frm_money,
        frm_uala,
        frm_mp,
        frm_lc,
        frm_cvu,
        frm_namelast,
        frm_number,  
        frm_provincia,
        frm_ciudad,
        frm_dni,
        frm_verifisi,
        frm_verifino,
        frm_amountservi
    })

    dbForm.save()
})

module.exports = router

