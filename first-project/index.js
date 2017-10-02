const CountStream = require('./countstream.js');
let countstream = new CountStream('book');
const https = require('https');

https.get('https://www.manning.com', function(res){
	res.pipe(countstream);
});


countstream.on('total', function(count){
	console.log('totle matches', count);
})
