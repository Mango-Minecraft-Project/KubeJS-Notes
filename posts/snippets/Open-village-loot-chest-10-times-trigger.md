---
isOriginal: true
category:
  - 程式碼片段 
tag:
  - 伺服器腳本｜server side
---

# 玩家每開啟10次村莊中的戰利品箱後觸發

```js
const dataKey = "villageChestsOpened";
const maxOpenTimes = 10;

BlockEvents.rightClicked("chest", (event) => {
  const { player, block } = event;

  if (block.entityData.getString("LootTable").includes("chests/village/")) {
    player.persistentData.putLong(dataKey, player.persistentData.getLong(dataKey) + 1);
    player.tell("You've opened a village chest!");

    if (player.persistentData.getLong(dataKey) >= maxOpenTimes) {
      player.tell("  You've opened 10 village chests!");
      player.persistentData.putLong(dataKey, 0);
    }
  }
});
```