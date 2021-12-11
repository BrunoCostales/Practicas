const express = require('express');
const router = express.Router();
const indexController = require ('../controllers/indexController')



/* GET home page. */
router.get('/', indexController.index);

module.exports = router; //Para que la ruta este disponible a futuro, estas deben ser exportadas
