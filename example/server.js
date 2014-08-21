var zetta = require('zetta');
var Buzzer = require('../index');

zetta()
  .use(Buzzer, 'P9_14')
  .listen(1337);
