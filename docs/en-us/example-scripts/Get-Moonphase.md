---
isOriginal: true
category:
  - Example Scripts
tag:
  - Server Side
---

# Get Current Moon Phase

```js
const moonPhaseList = [
  "Full",
  "Waning Gibbous",
  "Last Quarter",
  "Waning Crescent",
  "New",
  "Waxing Crescent",
  "First Quarter",
  "Waxing Gibbous",
];

LevelEvents.tick("overworld", (event) => {
  const { moonPhase, dayTime, server } = event;

  if (dayTime % 24000 === 1) {
    server.tell(`Today's moon phase is ${moonPhaseList[moonPhase]}`);
  }
});
```
