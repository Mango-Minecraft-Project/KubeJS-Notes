import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/KubeJS-Notes/",
  port: 9090,
  // open: true,

  lang: "zh-TW",
  title: "芒果的 KubeJS 筆記",
  description: "一些關於 Minecraft 的 KubeJS 筆記",

  theme,
});
