var mongoose = require('mongoose');

var addingInventorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {
        type: Number,
        required: true
    },
    size: {type: String, required: true},
    colour: {
        type: String,
        required:true
    },
    article:{
    	type:Number,
    	required:true
    },
    article_type:{
    	type:String,
    	required:true
    },
    price:{
    	type:Number,
    	required:true
    }
    
});

mongoose.model('Inventory', addingInventorySchema);