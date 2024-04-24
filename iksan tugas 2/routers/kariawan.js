const router = require('express').Router();

router.get('/kariawan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_KARIAWAN'
    });
});

router.post('/kariawan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_KARIAWAN'
    });
});

router.put('/kariawan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_KARIAWAN'
    });
});

router.delete('/kariawan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_KARIAWAN'
    });
});

module.exports = router;