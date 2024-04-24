const router = require('express').Router();

router.get('/supir', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_SUPIR'
    });
});

router.post('/supir', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_SUPIR'
    });
});

router.put('/supir', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_SUPIR'
    });
});

router.delete('/supir', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_SUPIR'
    });
});

module.exports = router;