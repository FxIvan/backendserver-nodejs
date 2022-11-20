const {Router} = require('express')
const router = Router()
const dataForm = require('../models/solicitudSchema')

router.route('/')
    .get(async(req,res)=>{
        const datosForm = dataForm.find()
        res.json(datosForm)
    })
    .post(async(req, res) => {

        const {
            frm_telefono,
            frm_email,
            frm_nombreyapellido,
            frm_direccion,
            frm_altura,
            frm_piso,
            frm_departamento,
            frm_provincia,
            frm_billetera,
            frm_cantidad,
            frm_ciudad_option
        } = req.body

        const solicitudSchema = new dataForm({
            frm_telefono,
            frm_email,
            frm_nombreyapellido,
            frm_direccion,
            frm_altura,
            frm_piso,
            frm_departamento,
            frm_provincia,
            frm_billetera,
            frm_cantidad,
            frm_ciudad_option
        })

        solicitudSchema.save()
        .then(status=>{
            console.log( 'Status: ' , status )
            res.json(status)
        })
        .catch(err=>{
            console.log( 'Err: ' , err)
            res.status(500).send(err)
        })

    })

module.exports = router