/**
 * Simple tests for this simple module. (Make sure to run npm install before testing!)
 */

var should = require('chai').should();
var FluxConstantGenerator = require('../');

describe('Flux Constants Module', function() {
  context('Default Mode', function() {
    var TestConstants;
    it('should return an object with mirrored keys and strings', function() {
      TestConstants = FluxConstantGenerator(['CONSTANT_ONE', 'CONSTANT_TWO']);
      TestConstants.should.eql({CONSTANT_ONE: 'CONSTANT_ONE', CONSTANT_TWO: 'CONSTANT_TWO'});
    });
  });

  context('Compact Mode', function() {
    // Need to confirm that integers are not repeated across different calls to this function.
    var AnimalConstants, InsectConstants;
    before(function() {
      AnimalConstants = FluxConstantGenerator(['BIRDS', 'HORSES', 'ZEBRAS'], true);
      InsectConstants = FluxConstantGenerator(['BEES', 'ANTS', 'BEETLES'], true);
    });
    it('should return an object with contiguous integers as values for the strings passed in', function() {
      AnimalConstants.should.eql({BIRDS: 0, HORSES: 1, ZEBRAS: 2});
    });
    it('should not repeat integers across different returned objects', function() {
      AnimalConstants.should.not.eql(InsectConstants);
      AnimalConstants.should.eql({BIRDS: 0, HORSES: 1, ZEBRAS: 2});
      InsectConstants.should.eql({BEES: 3, ANTS: 4, BEETLES: 5});
    });
    after(function() {
      AnimalConstants = InsectConstants = null;
    });
  });
  
});