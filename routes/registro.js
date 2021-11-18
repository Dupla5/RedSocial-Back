var express = require('express');
var router = express.Router();

const pool = require('../views/database');

/* GET registro listing. */
router.get('/', function(req, res, next) {
  res.json({msg:'Inicio Usuarios'});
});

module.exports = router;
