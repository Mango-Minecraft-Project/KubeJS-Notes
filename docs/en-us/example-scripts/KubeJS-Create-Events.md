---
isOriginal: true
author:
  - name: Mango Jelly Pudding
  - name: Prunoideae
    url: https://github.com/Prunoideae
category:
  - Example Scripts
tag:
  - Server Side
  - code example
star: true
---

# `CreateEvents` provided by KubeJS Create

## Steam Boiler Heat Source - `boilerHeatHandler`

```js
CreateEvents.boilerHeatHandler((event) => {
  /**
   * Explanation of Heat Level:
   * -1: This block does not provide heat in any form.
   * 0 : This block provides passive heat. (Like unfueled blaze burners)
   * 1 : This block provides 1 unit of heat (1 green bar in the status, like fueled blaze burners)
   * 2 : This block provides 2 units of heat (like blaze-caked burners)
   * X : This block provides X units of heat, which is X green bars in the status
   *
   * Notice that the callback is invoked only when there's an update signal to the boilers.
   * Like a change of blockstate in adjacent blocks, breaking/placing, etc.
   */

  /**
   * Register a heater for a single block.
   * The parameter in the callback is a BlockContainerJS.
   */
  event.add("minecraft:diamond_block", (block) => {
    return 2;
  });

  /**
   * Register a heater for a block predicate.
   */
  event.addAdvanced("#minecraft:logs", (block) => {
    if (block.id === "minecraft:oak_log") {
      return 1;
    } else {
      return 2;
    }
  });
});
```

## Pipe Fluid Effect - `pipeFluidEffect`

```js
CreateEvents.pipeFluidEffect((event) => {
  // Creates a handler for the fluid, FluidIngredient is supported.

  event.add(
    Fluid.water(), // Fluid
    (pipe, fluid) => {
      const { world } = pipe;
      if (world.server.tickCount % 5 != 0) return;

      world.getEntitiesWithin(pipe.AOE).forEach((entity) => {
        if (entity.living) {
          entity.heal(5);
        }
      });
    }
  );
});
```

## Spout Handler - `spoutHandler`

```js
CreateEvents.spoutHandler((event) => {
  // Creates a handler for spout, the id is required as there's no way to generate a consistent uuid here.
  //
  // Spout will call the handler with simulate = true for every tick, if the returned value > 0, then
  // the spout will start its animation, handler will be called with simulate = false again at the end of
  // the animation.
  //
  // The returned integer is how much fluid should this operation consume.

  event.add(
    "kubejs:obsidian", // ID
    "minecraft:lava", // Target block
    (block, fluid, simulate) => {
      if (fluid.id === Fluid.water().id && fluid.amount >= 100) {
        if (!simulate) {
          block.set("minecraft:obsidian");
        }
        return 100;
      }
      return 0;
    }
  );
});
```
