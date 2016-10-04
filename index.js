var extend = require('extend');
var getSize = require('get-size');

var instances = [];

function update(instance) {
  var el = instance[0];
  var settings = instance[1];

  var elw = getSize(el).width;
  var width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw;
  var fontBase = width / settings.fontRatio;
  var fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;

  el.style.fontSize = fontSize + 'px';
};

window.addEventListener('resize', function() {
  for(var i = 0; i < instances.length; i++) {
    update(instances[i]);
  }
});

module.exports = function flowtype(el, settings) {
  settings = extend({
    maximum   : 9999,
    minimum   : 1,
    maxFont   : 9999,
    minFont   : 1,
    fontRatio : 35
  }, settings);

  var instance = [el, settings];
  update(instance);
  instances.push(instance);
};
