const papersController = require('../controllers/papers');
const express = require('express');

const router = express.Router();

router.get('/', papersController.getPapers);

module.exports = router; 
