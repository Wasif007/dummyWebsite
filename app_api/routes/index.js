var express = require('express');
var router = express.Router();
var ctrlInventory=require('../controllers/inventory');
var ctrlUploadingMessage=require('../controllers/uploadingMessage');
//Displaying All the inventories
router.get('/displayInventory', ctrlInventory.inventoryList);
//Adding new Inventories
router.post('/addInventory',ctrlInventory.inventoryAdd);
//Deleting all the inventories
router.delete('/deleteInventory',ctrlInventory.inventoryDelete);
//pdating any Inventories 
router.put('/updateInventory/:article',ctrlInventory.inventoryUpdate);

router.post('/uploadingMessage',ctrlUploadingMessage.sendingEmail);
module.exports = router;
