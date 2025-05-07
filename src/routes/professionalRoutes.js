const express = require('express');
const router = express.Router();
const proController = require('../controllers/professionalController')
 
router.get('/professional', proController.getProfessionalData);

module.exports = router;
