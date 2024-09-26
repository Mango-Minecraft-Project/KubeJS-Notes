---
isOriginal: true
category:
  - Example Scripts
tag:
  - Server Side
---

# Rainbow Text

Must be used with the [Text Animator](https://modrinth.com/mod/text-animator) module

<VidStack src="/example-scripts/Rainbow-Text-with-Text-Animator/0.mp4"/>

```js
StartupEvents.registry("item", (event) => {
  event
    .create("rainbow_stick")
    .displayName("<shadow-off><rainb>Rainbow Stick</rainb></shadow-off>")
    .texture("minecraft:item/stick");
});
```
