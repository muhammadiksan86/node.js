const router = require('express').Router();

router.get('/tentara', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_TENTARA'
    });
});

router.post('/tentara', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_TENTARA'
    });
});

router.put('/tentara', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_TENTARA'
    });
});

router.delete('/tentara', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_TENTARA'
    });
});

module.exports = router;