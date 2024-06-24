---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
  - Recipe
---

# Consuming Item Durability in Crafting

![images/snippets/Damage-item-recipe-1.png](/images/snippets/Damage-item-recipe-1.png)

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