---
isOriginal: true
category:
  - 程式碼片段
tag:
  - 伺服器腳本｜server side
  - 配方｜recipe
---

# 合成時消耗物品耐久

![images/snippets/Damage-item-recipe-1.png](./images/snippets/Damage-item-recipe-1.png)

```js
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless("stripped_oak_log", ["oak_log", "#minecraft:axes"])
    .damageIngredient("#minecraft:axes");
});
```

::: info
僅限 `kubejs:shaped` 和 `kubejs:shapeless` 配方可使用 `.damageIngredient`
:::