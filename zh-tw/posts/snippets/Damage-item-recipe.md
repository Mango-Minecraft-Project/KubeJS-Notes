---
isOriginal: true
category:
  - 程式碼片段
tag:
  - 伺服器腳本
  - 配方
---

# 合成時消耗物品耐久

![posts/snippets/Damage-Item-Recipe/0.png](/posts/snippets/Damage-Item-Recipe/0.png)

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