##Control an RGB LED using Zetta and bonescript!

###Install

```
$> npm install zetta-rgb-bonescript-driver
```

###Usage

```
var zetta = require('zetta');
var LED = require('zetta-rgb-bonescript-driver');

zetta()
  .use(LED)
  .listen(1337)
```

###Transitions

#####toggleRed

No arguments. Turns the red led on or off. Depends on state.

#####toggleGreen

No arguments. Turns the green led on or off. Depends on state.

#####toggleBlue

No arguments. Turns the blue led on or off. Depends on state.

#####setColor

Hex string color code. Sets led color based on string passed in.

