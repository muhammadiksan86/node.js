const router = require('express').Router();

router.get('/pilot', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_PILOT'
    });
});

router.post('/pilot', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_PILOT'
    });
});

router.put('/pilot', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_PILOT'
    });
});

router.delete('/pilot', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_PILOT'
    });
});

module.exports = router;