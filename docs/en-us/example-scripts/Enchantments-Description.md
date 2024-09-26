---
author:
  - name: Mango Jelly Pudding
  - name: KL_jiana
isOriginal: true
category:
  - Example Scripts
tag:
  - Client Side
star: true
---

# Enchantment Descriptions

Some code sourced from: KL_jiana

```js
ClientEvents.lang("en_us", (event) => {
  event.addAll("enchdesc", {
    "tooltip.enchdesc.hold_shift":
      "§6Hold §eShift §6to view enchantment descriptions§r",
    "tooltip.enchdesc.embellish": " ◊ %s: %s",

    _comment: "Vanilla Enchantment Descriptions",
    "enchantment.minecraft.protection.desc": "Reduces most damage.",
    "enchantment.minecraft.fire_protection.desc":
      "Reduces fire damage and decreases burn time.",
    "enchantment.minecraft.feather_falling.desc":
      "Reduces fall and Ender Pearl teleportation damage.",
    "enchantment.minecraft.blast_protection.desc":
      "Reduces explosion damage and knockback.",
    "enchantment.minecraft.projectile_protection.desc":
      "Reduces projectile (such as arrows and fireballs) damage.",
    "enchantment.minecraft.respiration.desc":
      "Extends player's underwater breathing time and enhances underwater vision.",
    "enchantment.minecraft.aqua_affinity.desc":
      "Increases mining speed underwater.",
    "enchantment.minecraft.thorns.desc":
      "Deals damage to enemies attacking you.",
    "enchantment.minecraft.sharpness.desc": "Increases item damage.",
    "enchantment.minecraft.smite.desc":
      "Increases damage to undead mobs (such as zombies and skeletons).",
    "enchantment.minecraft.bane_of_arthropods.desc":
      "Increases damage to arthropod mobs (such as spiders and silverfish).",
    "enchantment.minecraft.knockback.desc": "Increases weapon knockback.",
    "enchantment.minecraft.fire_aspect.desc":
      "Deals additional fire damage to targets.",
    "enchantment.minecraft.looting.desc":
      "Increases loot dropped from killed mobs.",
    "enchantment.minecraft.efficiency.desc": "Increases tool mining speed.",
    "enchantment.minecraft.silk_touch.desc":
      "Allows obtaining fragile blocks (such as glass).",
    "enchantment.minecraft.unbreaking.desc": "Slows down tool durability loss.",
    "enchantment.minecraft.fortune.desc":
      "Increases drop rate of certain blocks (such as coal ore and diamond ore).",
    "enchantment.minecraft.power.desc": "Increases bow damage.",
    "enchantment.minecraft.punch.desc": "Increases bow knockback.",
    "enchantment.minecraft.flame.desc": "Arrows set targets on fire.",
    "enchantment.minecraft.infinity.desc":
      "Allows bow to shoot normal arrows infinitely, must have at least one arrow.",
    "enchantment.minecraft.luck_of_the_sea.desc":
      "Increases chance of obtaining valuable loot while fishing.",
    "enchantment.minecraft.lure.desc": "Reduces time until fish bite.",
    "enchantment.minecraft.depth_strider.desc":
      "Increases movement speed in water.",
    "enchantment.minecraft.frost_walker.desc":
      "Turns water beneath the player into ice.",
    "enchantment.minecraft.mending.desc":
      "Repairs armor and tools with experience.",
    "enchantment.minecraft.binding_curse.desc":
      "Prevents cursed items in armor slots from being removed.",
    "enchantment.minecraft.vanishing_curse.desc":
      "Destroys cursed items in inventory upon death.",
    "enchantment.minecraft.sweeping.desc":
      "Increases damage of sweeping attacks.",
    "enchantment.minecraft.loyalty.desc":
      "Causes tridents to return after being thrown.",
    "enchantment.minecraft.impaling.desc":
      "Increases damage to players and aquatic mobs.",
    "enchantment.minecraft.riptide.desc":
      "Allows player to use trident for propulsion, only works in rain or underwater.",
    "enchantment.minecraft.channeling.desc":
      "Summons lightning when trident is thrown during a thunderstorm.",
    "enchantment.minecraft.multishot.desc":
      "Shoots additional arrows in close proximity.",
    "enchantment.minecraft.quick_charge.desc":
      "Increases crossbow loading speed.",
    "enchantment.minecraft.piercing.desc":
      "Allows projectiles to pierce through entities.",
    "enchantment.minecraft.soul_speed.desc":
      "Increases movement speed on soul blocks.",
    "enchantment.minecraft.swift_sneak.desc":
      "Increases movement speed while sneaking.",
  });
});

ItemEvents.tooltip((event) => {
  const EMBELLISH_TEXT = (arg0, arg1) =>
    Text.translate("tooltip.enchdesc.embellish", arg0, arg1);
  const HOLD_SHIFT_TEXT = Text.translate("tooltip.enchdesc.hold_shift");
  const ENCHANTED_BOOK = Ingredient.of("minecraft:enchanted_book");

  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (!ENCHANTED_BOOK.test(item) && !item.enchanted) return;
    const { enchantments } = item;

    if (event.shift) {
      enchantments.forEach((enchantment) => {
        let descriptionId = `enchantment.${enchantment.replace(":", ".")}`;
        text.add(
          EMBELLISH_TEXT(
            Text.translate(descriptionId),
            Text.translate(`${descriptionId}.desc`).darkGray()
          )
        );
      });
    } else {
      text.add(HOLD_SHIFT_TEXT);
    }
  });
});
```
