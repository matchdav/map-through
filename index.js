var through = require('through');


/**
 * Return a readable/writeable stream that applies fn to the data
 * @param  {Function} fn a transform operation e.g. String.prototype.toUpperCase
 * @return {Stream}      a transform stream.
 */
function transform(fn) {

	return through(function(data){
	
		if(fn && fn instanceof Function) {

			// NOTE: stream ends if the function returns nothing
			this.queue(fn(data));

		} else {

			// Assumption here is that fn is a static value and the stream data should 'assume' it.
			this.queue( fn || data );

		}
	
	});

}

module.exports = transform;