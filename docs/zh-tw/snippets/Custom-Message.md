---
isOriginal: true
category:
  - 程式碼片段
tag:
  - 伺服器腳本
  - 訊息
---

# 自訂訊息顯示

```js
PlayerEvents.chat((event) => {
  let { player, message, server } = event;
  server.tell([Text.yellow(player.displayName), " ", Text.gray("»"), " ", Text.white(message)]);
  event.cancel();
});
```