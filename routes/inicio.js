const express = require('express');
const router = express.Router();

/* GET inicio page. */
router.get('/', function(req, res, next) {
  res.json({ msg: 'Inicio' });
});

module.exports = router;
