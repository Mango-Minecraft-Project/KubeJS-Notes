---
isOriginal: true
category:
  - Tips and Tricks
star: true
sticky: true
---

# Script Preprocess Arguments [KubeJS 6+]

You can use preprocess arguments at the beginning of your script, as follows:

|Name|Purpose|Parameter Type|Description|Default Value|
|:-:|---|---|---|:-:|
|`priority`|Load Priority|Integer(Number)|The higher the number, the earlier it loads|`0`|
|`ignored`|Ignore Load|Boolean|If true, it skips loading|`false`|
|`packmode`|Module Pack Mode|String|If the module pack mode is not equal to the input value, it skips loading|`default`|
|`requires`|Namespace Requirement|String|If the namespace is not loaded, it skips loading|` ` (none)|
||||||

## Example

```js
// priority: 100
// ignored: false
// packmode: dev
// requires: forge
// requires: create
```