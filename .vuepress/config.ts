import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 9090,
  // open: true,

  lang: "zh-TW",
  title: "芒果的 KubeJS 筆記",
  description: "一些關於 Minecraft 的 KubeJS 筆記",

  theme,

  head: [
    ["meta", { property: "og:image", content: "https://raw.githubusercontent.com/KubeJS-Mods/KubeJS/2001/common/src/main/resources/kubejs_logo.png" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "128" }],
    ["meta", { property: "og:image:height", content: "128" }],
    ["meta", { property: "theme-color", content: "#422066" }],
  ]
});
