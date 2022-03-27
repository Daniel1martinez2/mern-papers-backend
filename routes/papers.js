const papersController = require('../controllers/papers');
const express = require('express');

const router = express.Router();

router.get('/', papersController.getPapers);
router.post('/', papersController.postPaper);

module.exports = router; 
