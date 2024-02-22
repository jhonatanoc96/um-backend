const express = require('express');
const router = express.Router();

const itemController = require('../src/controllers/item.controller');

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.get('/id/:id', itemController.getItemByUniqueId);
router.get('/q/:query', itemController.getItemsByQuery);
router.post('/', itemController.saveItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
