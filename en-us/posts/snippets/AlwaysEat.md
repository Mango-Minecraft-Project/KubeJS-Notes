---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
---

# Always Eat

```js
ItemEvents.modification((event) => {
  Ingredient.all.itemIds.forEach((id) => {
    event.modify(id, (item) => {
      if (item.foodProperties != null) {
        item.foodProperties = (properties) => {
          properties.alwaysEdible();
        };
      }
    });
  });
});
```

## Source

[https://www.curseforge.com/minecraft/mc-mods/alwayseat](https://www.curseforge.com/minecraft/mc-mods/alwayseat)

