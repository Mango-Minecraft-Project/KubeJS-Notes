---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
  - Recipe
---

# Consuming Item Durability in Crafting

![example-scripts/Damage-Item-Recipe/0.png](/example-scripts/Damage-Item-Recipe/0.png)

```js
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless("stripped_oak_log", ["oak_log", "#minecraft:axes"])
    .damageIngredient("#minecraft:axes");
});
```

::: info
`.damageIngredient` can only be used in `kubejs:shaped` and `kubejs:shapeless` recipes.
:::
