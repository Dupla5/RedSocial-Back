var express = require('express');
var router = express.Router();

/* GET perfil listing. */
router.get('/', function (req, res, next) {
    res.json({ msg: 'Perfil Usuario' });
});

module.exports = router;