---
isOriginal: true
category:
  - Example Scripts
tag:
  - Server Side
---

<!-- #region world-seed -->

# Get the Accurate World Seed

```js
const seed = NBT.l(server.worldData.worldGenOptions().seed());
```

::: tip
The seed can only be stored as a String or NBT. If stored as a Number, it may result in inaccuracies due to Java Double floating-point precision errors.
:::

<!-- #endregion world-seed -->
