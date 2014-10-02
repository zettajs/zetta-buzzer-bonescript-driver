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

###Design

The sound designs in the buzzer driver follow international standards. Confer with [Siemens](http://www.buildingtechnologies.siemens.com/bt/global/en/firesafety/fire-detection/cerberus-pro-fire-safety-system/peripherals/alarm-equipment/pages/alarm-sounds.aspx) list of alarm sound tones.