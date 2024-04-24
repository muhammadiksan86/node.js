const router = require('express').Router();

router.get('/dokter', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_DOKTER'
    });
});

router.post('/dokter', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_DOKTER'
    });
});

router.put('/dokter', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_DOKTER'
    });
});

router.delete('/dokter', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_DOKTER'
    });
});

module.exports = router;