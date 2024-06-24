---
isOriginal: true
category:
  - Notes
tag:
  - PlayerEvents
  - Chat
---

# Difference between `PlayerEvents.chat` and `PlayerEvents.decorateChat`

- `PlayerEvents.chat`: Can be cancelled, primarily used for event cancellation.
- `PlayerEvents.decorateChat`: Cannot be cancelled, primarily used for message modification.