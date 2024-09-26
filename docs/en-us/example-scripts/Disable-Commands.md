---
isOriginal: true
category:
  - Example Scripts
tag:
  - Server Side
---

# Disable Specific Commands for Players

_You Shall Not Pass!_

```js
/**
 * @param {Internal.CommandEventJS_} event
 */
function youShallNotUsePainter(event) {
  const { input, parseResults } = event;

  if (input.split(" ")[1] === "painter") {
    parseResults.context.source.player.tell("You Shall Not Use Painter!");
    event.cancel();
  }
}

ServerEvents.command("kubejs", youShallNotUsePainter);
ServerEvents.command("kjs", youShallNotUsePainter);
```
