---
isOriginal: true
category:
  - Notes
tag:
  - DamageSource
---

# Difference between `immediate` and `actual` in DamageSource

`immediate` returns the direct attacker.
`actual` returns the owner of the damage.

For example, when a player shoots an arrow at an entity:
- `immediate` returns `Arrow`
- `actual` returns `Player`