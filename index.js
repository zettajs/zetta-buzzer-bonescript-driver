var util = require('util');
var AutoScout = require('zetta-auto-scout');
var Buzzer = require('./buzzer_driver');

var BoneScout = module.exports = function(pin) {
  AutoScout.call(this, 'buzzer', Buzzer, pin);
};
util.inherits(BoneScout, AutoScout);
