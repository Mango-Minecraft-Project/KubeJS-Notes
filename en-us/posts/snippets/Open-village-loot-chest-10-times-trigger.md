---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
---

# Trigger after player opens village loot chest 10 times

```js
const dataKey = "villageChestsOpened";
const maxOpenTimes = 10;

BlockEvents.rightClicked("chest", (event) => {
  const { player, block } = event;

  if (block.entityData.getString("LootTable").includes("chests/village/")) {
    player.persistentData.putLong(dataKey, player.persistentData.getLong(dataKey) + 1);
    player.tell("You've opened a village chest!");

    if (player.persistentData.getLong(dataKey) >= maxOpenTimes) {
      player.tell("You've opened 10 village chests!");
      player.persistentData.putLong(dataKey, 0);
    }
  }
});
```