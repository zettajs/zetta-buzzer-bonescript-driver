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
  .use(Buzzer, 'P9_14')
  .listen(1337)
```

### Hardware

* [Beagle Bone](http://beagleboard.org/black)
* [Piezo Speaker](https://www.sparkfun.com/products/7950)

![Hookup Diagram](docs/hookup_diagram_bb.png)

###Transitions

#####turn-on

No arguments. Turns on the buzzers beeping mode.

#####turn-off

No arguments. Turns off the beeping.

#####beep

No arguments. Beeps the buzzer once.
