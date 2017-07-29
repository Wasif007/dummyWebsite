var express = require('express');
var router = express.Router();
var ctrlInventory=require('../controllers/inventory');

//Displaying All the inventories
router.get('/displayInventory', ctrlInventory.inventoryList);
//Adding new Inventories
//router.post('/addInventory',ctrlInventory.inventoryAdd);
//Deleting all the inventories
//router.delete('/deleteInventory',ctrlInventory.inventoryDelete);
//Updating any Inventories 
//router.update('/updateInventory',ctrlInventory.inventoryUpdate);

module.exports = router;
