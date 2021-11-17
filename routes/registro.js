var express = require('express');
var router = express.Router();

/* GET registro listing. */
router.get('/', function(req, res, next) {
  res.send({msg:'Inicio Usuarios'});
});

module.exports = router;
