from pathlib import Path

from pprint import pprint


CWD = Path.cwd()

created_path = CWD / "docs/zh-tw/wiki/KubeJS-7/Events"
created_path.mkdir(parents=True, exist_ok=True)

events = """
BlockEvents
    blockEntityTick
    broken
    detectorChanged
    detectorPowered
    detectorUnpowered
    farmlandTrampled
    leftClicked
    modification
    placed
    rightClicked
    startedFalling
    stoppedFalling

ClientEvents
    atlasSpriteRegistry
    blockEntityRendererRegistry
    blockEntityTick
    drops
    entityRendererRegistry
    generateAssets
    lang
    leftDebugInfo
    loggedIn
    loggedOut
    menuScreenRegistry
    painterUpdated
    paintScreen
    particleProviderRegistry
    randomTick
    rightDebugInfo
    startedFalling
    stoppedFalling
    tick

EntityEvents
    afterHurt
    beforeHurt
    checkSpawn
    death
    drops
    spawned

ItemEvents
    armorTierRegistry
    canPickUp
    crafted
    destroyed
    dropped
    dynamicTooltips
    entityInteracted
    firstLeftClicked
    firstRightClicked
    foodEaten
    modelProperties
    modification
    modifyTooltips
    pickedUp
    rightClicked
    smelted
    toolTierRegistry

LevelEvents
    afterExplosion
    beforeExplosion
    loaded
    saved
    tick
    unloaded

NativeEvents
    onEvent

NetworkEvents
    dataReceived

PlayerEvents
    advancement
    chat
    chestClosed
    chestOpened
    cloned
    decorateChat
    inventoryChanged
    inventoryClosed
    inventoryOpened
    loggedIn
    loggedOut
    respawned
    stageAdded
    stageRemoved
    tick

RecipeViewerEvents
    addEntries
    addInformation
    groupEntries
    registerSubtypes
    removeCategories
    removeEntries
    removeEntriesCompletely
    removeRecipes

ServerEvents
    afterRecipes
    basicCommand
    command
    commandRegistry
    compostableRecipes
    generateData
    loaded
    modifyRecipeIngredient
    modifyRecipeResult
    recipeMappingRegistry
    recipes
    recipeSchemaRegistry
    recipeTypeRegistry
    specialRecipeSerializers
    tags
    tick
    unloaded

StartupEvents
    init
    modifyCreativeTab
    postInit
    registry
"""

data = [*map(str.strip, events.split("\n\n"))]

md_base = """---
title: {namespace}
index: false
---

"""

sub_md_base = """---
title: {namespace}.{name}
shortTitle: {name}
article: false
---

"""

for event in data:
    _event = event.split("\n    ")
    namespace, *names = _event
    
    event_path = created_path / namespace
    event_path.mkdir(parents=True, exist_ok=True)
    
    # with open(event_path / "README.md", "w") as file:
    #     file.write(md_base.format(namespace=namespace))
    
    for name in names:
        with open(event_path / f"{name}.md", "w") as file:
            file.write(sub_md_base.format(namespace=namespace, name=name))