---
isOriginal: true
category:
  - 程式碼片段
tag:
  - 伺服器腳本｜server side
---

# 禁止玩家使用特定指令

*You Shall Not Pass!*

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