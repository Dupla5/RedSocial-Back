var express = require('express');
var router = express.Router();

/* GET inicio page. */
router.get('/', function(req, res, next) {
  res.json({ msg: 'Inicio' });
});

module.exports = router;
