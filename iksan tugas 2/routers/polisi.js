const router = require('express').Router();

router.get('/polisi', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET_POLISI'
    });
});

router.post('/polisi', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST_POLISI'
    });
});

router.put('/polisi', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT_POLISI'
    });
});

router.delete('/polisi', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE_POLISI'
    });
});

module.exports = router;