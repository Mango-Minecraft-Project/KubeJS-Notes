---
isOriginal: true
category:
  - 程式碼片段
tag:
  - 啟動腳本
  - 物品 Builder
---

# 修改物品的 Builder

```js
ItemEvents.modification((event) => {
  const ItemBuilder = Java.loadClass(
    "dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder"
  );

  event.modify("...", (item) => {
    const builder = new ItemBuilder("...").glow(true);
    item.setItemBuilder(builder);
  });
});
```