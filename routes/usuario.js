const express = require('express');
const router = express.Router();
const pool = require('../views/database');




/* Ruta Usuario. */
router.get('/',(req,res)=>{
  res.status(200).json({msg:'Ruta Usuario'});
})


/*Ruta Regsitro Usuario*/
router.get('/add', (req, res) => {
  res.json({msg:'Registro Usuarios'});
});

module.exports = router;
