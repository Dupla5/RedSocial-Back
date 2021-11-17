var express = require('express');
var router = express.Router();

/* GET inicio page. */
router.get('/', function(req, res, next) {
  res.send({ msg: 'Inicio' });
});

module.exports = router;
