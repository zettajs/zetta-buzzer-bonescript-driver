var zetta = require('zetta');
var Buzzer = require('../index');

zetta()
  .use(Buzzer, 'P9_14')
  .listen(3000, function() {
    console.log('Listening on port 3000')
  });
