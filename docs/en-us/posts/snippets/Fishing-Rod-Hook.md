---
isOriginal: true
category:
  - Code Snippets
tag:
  - Server Side
---

# Fishing Rod Hook

<VidStack src="/posts/snippets/Fishing-rod-hook/0.mp4"/>

```js
ItemEvents.rightClicked("fishing_rod", (event) => {
  const { player } = event;

  if (player.fishing) {
    let { fishing: hook } = player;
    player.deltaMovement = new Vec3d(hook.x - player.x, hook.y - player.y, hook.z - player.z).scale(0.25);
    player.hurtMarked = true;
  }
});
```

