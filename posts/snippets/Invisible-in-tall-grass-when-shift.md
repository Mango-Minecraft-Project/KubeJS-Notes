---
isOriginal: true
category:
  - 程式碼片段
tag:
  - 伺服器腳本｜server side
---

# 玩家在芒草蹲下後隱身

```js
PlayerEvents.tick((event) => {
  const { player } = event;

  if (player.shiftKeyDown && player.block.id === "minecraft:tall_grass") {
    if (!player.hasEffect("invisibility")) {
      player.potionEffects.add("invisibility", -1, 0, false, false);
    }
  } else {
    player.removeEffect("invisibility");
  }
});
```