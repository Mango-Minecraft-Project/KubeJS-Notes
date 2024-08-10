import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhtwNavbar } from "./navbar/index.js";
import { enSidebar, zhtwSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://Mango-Minecraft-Project.github.io/KubeJS-Notes",

  iconAssets: "fontawesome-with-brands",
  logo: "/logo.png",
  repo: "Mango-Minecraft-Project/KubeJS-Notes",
  contributors: true,
  lastUpdated: true,
  darkmode: "enable",
  favicon: "/logo.png",

  locales: {
    "/zh-tw/": {
      navbar: zhtwNavbar,
      sidebar: zhtwSidebar,

      author: {
        name: "芒果凍布丁",
        url: "https://github.com/EvanHsieh0415",
      },

      blog: {
        description: "一個 KubeJS 開發者",
        medias: {
          Discord: "https://discord.com/invite/SCAfRyAVnR",
          GitHub: "https://github.com/EvanHsieh0415/",
          QQ: "https://qm.qq.com/q/sVBjgOfvtm",
        },
        name: "芒果凍布丁",
        avatar: "https://avatars.githubusercontent.com/u/74277414",
      },

      metaLocales: {
        editLink: "在 GitHub 上編輯此頁面",
      },
    },
    "/en-us/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      author: {
        name: "Mango Jelly Pudding",
        url: "https://github.com/EvanHsieh0415",
      },

      blog: {
        description: "A KubeJS Developer",
        medias: {
          Discord: "https://discord.com/invite/SCAfRyAVnR",
          GitHub: "https://github.com/EvanHsieh0415/",
        },
        name: "Mango Jelly Pudding",
        avatar: "https://avatars.githubusercontent.com/u/74277414",
      },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    redirect: {
      switchLocale: "modal",
      defaultBehavior: "homepage",
      defaultLocale: "/en-us/",
      config: {
        "/": "/en-us/",
      },
    },

    components: {
      components: ["Badge", "VPCard", "VidStack"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
