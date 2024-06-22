import { hopeTheme } from "vuepress-theme-hope";
import { Page } from "vuepress";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://Mango-Minecraft-Project.github.io/KubeJS-Notes",

  iconAssets: "fontawesome-with-brands",
  logo: "https://raw.githubusercontent.com/KubeJS-Mods/KubeJS/2001/common/src/main/resources/kubejs_logo.png",
  repo: "Mango-Minecraft-Project/KubeJS-Notes",
  contributors: true,
  lastUpdated: true,
  darkmode: "enable",

  navbar,
  sidebar,
  footer: "預設頁尾",
  displayFooter: false,
  favicon: "https://raw.githubusercontent.com/KubeJS-Mods/KubeJS/2001/common/src/main/resources/kubejs_logo.png",

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

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: {
      filter: ({ frontmatter, filePathRelative, lang, path }: Page) =>
        !!(
          frontmatter.article ??
          (!!filePathRelative && !frontmatter.home && !frontmatter.exceptBar)
        ),
      excerptLength: 100,
    },

    components: {
      components: ["Badge", "VPCard"],
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
