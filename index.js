var AutoScout = require('zetta-auto-scout');
var Buzzer = require('./buzzer_driver');

module.exports = new AutoScout('buzzer', Buzzer);
