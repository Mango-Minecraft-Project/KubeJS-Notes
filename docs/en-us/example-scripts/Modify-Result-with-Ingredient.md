---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
  - Recipe
---

# Modify Result with Ingredient

![example-scripts/Modify-Result-with-Ingredient/0.png](/example-scripts/Modify-Result-with-Ingredient/0.png)

```js
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless(
      Item.of("wooden_axe").withName([
        Text.red(
          "Enchantments on axes will be removed, not replaced with wooden axes"
        ),
      ]),
      [
        Ingredient.of("#minecraft:axes").itemIds.map((id) =>
          Item.of(id).enchant("flame", 2).weakNBT()
        ),
        "sponge",
      ]
    )
    .keepIngredient("sponge")
    .modifyResult((grid, result) => {
      const item = grid.find(Ingredient.of("#minecraft:axes"));
      item.nbt.remove("Enchantments");
      return item;
    });
});
```

:::info
`.modifyResult` can only be used with `kubejs:shaped` and `kubejs:shapeless` recipes.
:::
