/**
 * AMD, CommonJS, Global compatible Script Wrapper
 * https://github.com/umdjs/umd
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
    /* istanbul ignore next */
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hexColorLuminance = factory();
  }
}(this, function () {

  /**
   * Luminate my world...
   * @type {{luminate: Function}}
   */
  var hexColorLuminance = {

    /**
     * Luminate my world...
     *
     * @param hex - color as hex (e.g. #fff, #ff0000) - hash is optional
     * @param lum - factor to darken/lighten the hex value -0.5 is 50% darker, 0.5 is 50% lighter
     */
    luminate: function (hex, lum) {
      // bring
      hex = String(hex).replace(/[^0-9a-f]/gi, '');
      if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      }
      var lum = lum || 0;

      // convert to decimal and change luminosity
      var rgb = "#", c, i;
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
      }

      return rgb;
    }
  };

  return hexColorLuminance;

}));