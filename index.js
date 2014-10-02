var Device = require('zetta-device');
var util = require('util');
var bone = require('bonescript');

var Buzzer = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin || 'P9_14';
  //Everything is off to start
  bone.analogWrite(this.pin, 0);
};
util.inherits(Buzzer, Device);

Buzzer.prototype.init = function(config) {
  config
    .state('off')
    .type('buzzer')
    .name('Buzzer')
    .when('off', { allow: ['turn-on', 'beep']})
    .when('on', { allow: ['turn-off'] })
    .when('beep', { allow: [] })
    .map('beep', this.beep)
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff);
};

// Swedish Standard SS 03 17 11, No. 1 “Imminent Danger”
// Pulse tone 500 Hz
Buzzer.prototype.turnOn = function(cb) {
  var onDuration = 150;
  var offDuration = 100;
  var freq = 500;
  this.state = 'on';
  this._timer = setInterval(this._beep.bind(this, onDuration, freq), onDuration + offDuration);
  cb();
};

Buzzer.prototype.turnOff = function(cb) {
  this.state = 'off';
  clearInterval(this._timer);
  bone.analogWrite(this.pin, 0);
  cb();
};

Buzzer.prototype.beep = function(cb) {
  this._beep(100, 750);
  cb();
};

Buzzer.prototype._beep = function(delay, freq) {
  var self = this;
  bone.analogWrite(this.pin, 0.5, freq, function() {
    setTimeout(function() {
      bone.analogWrite(self.pin, 0, freq);
    }, delay);
  });
};

