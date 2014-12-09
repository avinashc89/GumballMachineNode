/**
 * New node file
 */


var mongoose = require('mongoose');
var schema = mongoose.Schema;

var gumballSchema = new schema({
	
	id:Number,modelNumber:Number,serialNumber:Number,count:Number
});

var model = mongoose.model('gumballModel',gumballSchema,'gumball');