const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de usuarios
router.get('/', usersApiController.list)

//Listado de usuarios





module.exports = router