const router = require('express').Router();

router.get('/nelayan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_NELAYAN'
    });
});

router.post('/nelayan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_NELAYAN'
    });
});

router.put('/nelayan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_NELAYAN'
    });
});

router.delete('/nelayan', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_NELAYAN'
    });
});

module.exports = router;