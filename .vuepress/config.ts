import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 9999,
  // open: true,

  locales: {
    "/zh-tw/": {
      lang: "zh-TW",
      title: "芒果的 KubeJS 筆記",
      description: "一些關於 Minecraft 的 KubeJS 筆記",
    },
    "/en-us/": {
      lang: "en-US",
      title: "Mango's KubeJS Notes",
      description: "Some notes about KubeJS in Minecraft",
    },
  },

  lang: "zh-TW",
  title: "芒果的 KubeJS 筆記",
  description: "一些關於 Minecraft 的 KubeJS 筆記",

  theme,

  head: [
    ["meta", { property: "og:image", content: "/logo.png" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "128" }],
    ["meta", { property: "og:image:height", content: "128" }],
    ["meta", { property: "theme-color", content: "#422066" }],
  ]
});
