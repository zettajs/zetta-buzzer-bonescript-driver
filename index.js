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
    .when('off', { allow: ['turn-on-continuous', 'turn-on-pulse', 'turn-on-alternating', 'beep']})
    .when('continuous', { allow: ['turn-off', 'turn-on-pulse', 'turn-on-alternating', 'beep'] })
    .when('pulse', { allow: ['turn-off', 'turn-on-continuous', 'turn-on-alternating', 'beep'] })
    .when('alternating', { allow: ['turn-off', 'turn-on-continuous', 'turn-on-pulse', 'beep'] })
    .when('beep', { allow: [] })
    .map('beep', this.beep)
    .map('turn-on-continuous', this.turnOnContinuous)
    .map('turn-on-pulse', this.turnOnPulse)
    .map('turn-on-alternating', this.turnOnAlternating)
    .map('turn-off', this.turnOff);
};

// Swedish Standard SS 03 17 11, No. 4 “All clear”
// Continuous 500 Hz
Buzzer.prototype.turnOnContinuous = function(cb) {
  var state = 'continuous';
  var freq = 500;
  var onDuration = 500;
  var offDuration = 0;
  this._tone(freq, onDuration, offDuration, state, cb);
};

// Swedish Standard SS 03 17 11, No. 1 “Imminent Danger”
// Pulse tone 500 Hz
Buzzer.prototype.turnOnPulse = function(cb) {
  var state = 'pulse';
  var freq = 500;
  var onDuration = 150;
  var offDuration = 100;
  this._tone(freq, onDuration, offDuration, state, cb);
};

// “French fire sound” NF S 32-001-1975
// Pulse tone 560 Hz
Buzzer.prototype.turnOnAlternating = function(cb) {
  var state = 'alternating';
  var freq = 560;
  var onDuration = 100;
  var offDuration = 400;
  this._tone(freq, onDuration, offDuration, state, cb);
};

Buzzer.prototype.beep = function(cb) {
  this.state = 'beep';
  var self = this;
  this.turnOff(function() {
    self._buzz(100, 750); 
  });
  cb();
};

Buzzer.prototype.turnOff = function(cb) {
  if (this._timer != undefined) {
    clearInterval(this._timer);
  }
  bone.analogWrite(this.pin, 0);
  this.state = 'off';
  cb();
};

Buzzer.prototype._tone = function(freq, onDuration, offDuration, state, cb) {
  var self = this;
  this.turnOff(function(){
    self._timer = setInterval(self._buzz.bind(self, onDuration, freq), onDuration + offDuration);
    self.state = state;
    cb();
  });
};

Buzzer.prototype._buzz = function(delay, freq) {
  var self = this;
  bone.analogWrite(this.pin, 0.5, freq, function() {
    setTimeout(function() {
      bone.analogWrite(self.pin, 0, freq);
    }, delay);
  });
};

