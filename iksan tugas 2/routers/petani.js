const router = require('express').Router();

router.get('/petani', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_PETANI'
    });
});

router.post('/petani', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_PETANI'
    });
});

router.put('/petani', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_PETANI'
    });
});

router.delete('/petani', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_PETANI'
    });
});

module.exports = router;