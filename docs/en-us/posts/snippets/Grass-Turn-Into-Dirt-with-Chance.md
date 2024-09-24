---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
---

# Chance of Grass Turning into Dirt when Jumping on Grass Block

```js
const inputBlock = "minecraft:grass_block";
const outputBlock = "minecraft:dirt";

PlayerEvents.tick((event) => {
  const { player } = event;

  if (player.fallDistance > 1 && player.block.down.id === inputBlock) {
    player.tell("You fell on a grass block!");
    if (Math.random() < 0.25) {
      player.block.down.set(outputBlock);
      player.tell("The grass turned into dirt!");
    }
  }
});
```