---
isOriginal: true
category:
  - Notes
tag:
  - ItemStack
  - NBT
---

# Difference between `ItemStack.weakNBT()` and `ItemStack.strongNBT()`

Using `Item.of("diamond_sword", "{damage:50}")` as an example:

- `.weakNBT()`
  If the item's NBT contains `{damage:50}`, it can be used.
  Examples:
  - :white_check_mark: `{damage:50}`
  - :white_check_mark: `{damage:50, display:"Sword"}`
  - :x: `{display:"Sword"}`
- `.strongNBT()`
  If the item's NBT **only** contains `"{damage:50}"`, it can be used.
  Examples:
  - :white_check_mark: `{damage:50}`
  - :x: `{damage:50, display:"Sword"}`
  - :x: `{display:"Sword"}`