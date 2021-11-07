const router = require('express').Router();

const { Dispositivo } = require('../../db');
const dispositivos = require('../../models/dispositivos');

router.get('/',async ( req, res) => {
   const dispositivos = await Dispositivo.findAll();
   res.json(dispositivos);
});

router.post('/', async ( req, res) => {
    const dispositivos = await Dispositivo.create(req.body);
    res.json(dispositivos);
});


module.exports = router;