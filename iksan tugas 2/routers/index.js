const router = require('express').Router();

router.get('/', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method  GET'
    });
});

router.post('/', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method POST'
    });
});

router.put('/', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method PUT'
    });
});

router.delete('/', (_, res) => {
    res.json({
        status : true,
        message: 'Ini Adalah Method DELETE'
    });
});

module.exports = router;