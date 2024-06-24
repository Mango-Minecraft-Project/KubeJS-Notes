---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
  - Startup Side
---

# Random Concrete Pickaxe

## Startup Script

```js
StartupEvents.registry("item", (event) => {
  event.create("random_concrete_pickaxe", "pickaxe").texture(":item/iron_pickaxe").maxDamage(250);
});
```

## Server Script

```js
BlockEvents.broken((event) => {
  const { entity, block } = event;

  if (entity.mainHandItem.id === "kubejs:random_concrete_pickaxe" && block.hasTag("forge:stone")) {
    let color = Object.keys(Color.DYE)[Utils.random.nextInt(16)];
    block.popItem(`${color}_concrete`);
    block.set("air");
    event.cancel();
  }
});
```