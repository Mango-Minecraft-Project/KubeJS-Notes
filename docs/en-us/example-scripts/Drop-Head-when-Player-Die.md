---
isOriginal: true
category:
  - Example Scripts
tag:
  - Server Side
---

# Drop Player Head When Player Dies

```js
EntityEvents.death("player", (event) => {
  const { player } = event;

  player.block.popItem(Item.playerHead(player.username));
});
```
