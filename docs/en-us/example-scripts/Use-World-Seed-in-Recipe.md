---
isOriginal: true
category:
  - Example Scripts
tag:
  - Server Side
  - Recipe
---

# Using World Seed in Recipe

:::: note Summary

<!-- @include: Get-World-Seed.md -->

::::

```js
ServerEvents.loaded((event) => {
  const { server } = event;

  const seed = server.worldData.worldGenOptions().seed();
  server.persistentData.putLong("seed", seed);

  server.scheduleInTicks(10, () => server.runCommandSilent("reload"));
});

ServerEvents.recipes((event) => {
  const { server } = Utils;

  if (!server) return;
  const seed = server.persistentData.getLong("seed");

  // do_something(seed);
});
```
