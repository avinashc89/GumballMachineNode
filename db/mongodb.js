/**
 * New node file
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://gavinashc89:mongodb1@ds043220.mongolab.com:43220/mymongo', function(err) {
	 if (err) {
		   console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
			}
	});