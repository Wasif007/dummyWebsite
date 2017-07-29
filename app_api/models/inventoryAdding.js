var mongoose = require('mongoose');

var addingInventorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    
});

mongoose.model('Inventory', addingInventorySchema);