/**
 * Simple tests for this simple module. (Make sure to run npm install before testing!)
 */

var assert = require('assert');
var colors = require('colors');
var createFluxConstants = require('../react_constants');

var TestConstants = createFluxConstants(['CONSTANT_ONE', 'CONSTANT_TWO']);

assert.deepEqual(TestConstants, {'CONSTANT_ONE': 'CONSTANT_ONE', 'CONSTANT_TWO': 'CONSTANT_TWO'}, "The generated object is not as expected (Expected: {'CONSTANT_ONE': 'CONSTANT_ONE', 'CONSTANT_TWO': 'CONSTANT_TWO'}).".red);


console.info("Tests passed!".green);

