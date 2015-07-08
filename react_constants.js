var usageErrors = {
	PARAM_TYPE: new TypeError('You must pass an array to this function.'),
	CONSTANT_VALUE: new TypeError('Each constant in the array must be represented by a string')
};

var createFluxConstants = function (constants) {
	if(!(constants instanceof Array)) throw usageErrors.PARAM_TYPE;

	var obj = {};
	constants.forEach(function(constant) {
		if('string' !== typeof constant) throw usageErrors.CONSTANT_VALUE;
		obj[constant] = constant;
	});

	return obj;
};

module.exports = createFluxConstants;