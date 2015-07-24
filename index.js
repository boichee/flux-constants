var UsageErrors = {
	PARAM_TYPE: new TypeError('You must pass an array to this function.'),
	CONSTANT_VALUE: new TypeError('Each constant in the array must be represented by a string')
};

module.exports = function (values, compact) {
  if(!(values instanceof Array)) {
    throw UsageErrors.PARAM_TYPE;
  }

  // Now create our values object
  var constants = {};
  if(!compact) {
    values.forEach(function(value) {
      if('string' !== typeof value) {
        throw UsageErrors.CONSTANT_VALUE;
      }
      constants[value.toUpperCase()] = value.toUpperCase();
    });
  } else {
    // When 'compact' is set to true, the value of the constants will be represented by contiguous integerss to make them more compact in memory
    var i = 0;
    values.forEach(function(key) {
      if('string' !== typeof key) {
        throw UsageErrors.CONSTANT_VALUE;
      }
      constants[key.toUpperCase()] = i++;
    });
  }

  return constants;
};