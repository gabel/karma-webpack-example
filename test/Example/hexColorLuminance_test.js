var chai = require('../../node_modules/chai/chai');
var expect = chai.expect;

var hexColorLuminance = require('../../src/Example/hexColorLuminance');

describe("hexColorLuminance", function () {
  it("should return a luminanced color", function () {
    var color = hexColorLuminance.luminate("#fff", "-0.5");
    expect(color).is.not.empty;
  });
  it("should change the background of an element", function () {
    var div = document.createElement('div');
    div.style.backgroundColor = hexColorLuminance.luminate("#fff", "-0.5");
    expect(div.style.backgroundColor).is.not.empty;
  });

});