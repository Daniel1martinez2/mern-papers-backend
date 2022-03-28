const papersController = require('../controllers/papers');
const express = require('express');

const router = express.Router();

router.get('/', papersController.getPapers);
router.post('/', papersController.postPaper);
router.post('/delete', papersController.postDeletePaper);

module.exports = router; 
