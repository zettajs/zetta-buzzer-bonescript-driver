##Control an Piezo Buzzer using Zetta and bonescript!

###Install

```
$> npm install zetta-buzzer-bonescript-driver
```

###Usage

```
var zetta = require('zetta');
var Buzzer = require('zetta-buzzer-bonescript-driver');

zetta()
  .use(Buzzer)
  .listen(1337)
```

###Transitions

#####turn-on

No arguments. Turns on the buzzers beeping mode.

#####turn-off

No arguments. Turns off the beeping.

#####beep

No arguments. Beeps the buzzer once.
