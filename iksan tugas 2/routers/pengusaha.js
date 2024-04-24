const router = require('express').Router();

router.get('/pengusaha', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_PENGUSAHA'
    });
});

router.post('/pengusaha', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_PENGUSAHA'
    });
});

router.put('/pengusaha', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_PENGUSAHA'
    });
});

router.delete('/pengusaha', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_PENGUSAHA'
    });
});

module.exports = router;