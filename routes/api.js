const router = require('express').Router();

const apiDispositivosRouter = require('./api/dispositivos');

router.use('/dispositivos', apiDispositivosRouter);

module.exports = router;