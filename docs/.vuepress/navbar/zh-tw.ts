import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/zh-tw/",
  {
    text: "相關連結",
    icon: "list-ol",
    link: "/zh-tw/links",
  },
  {
    text: "筆記",
    icon: "book",
    link: "/zh-tw/notes/",
  },
  {
    text: "範例腳本",
    icon: "book",
    link: "/zh-tw/example-scripts/",
  },
  {
    text: "小技巧",
    icon: "book",
    link: "/zh-tw/tips-and-tricks/",
  },
  {
    text: "芒果版 KubeJS Wiki",
    icon: "fa-brands fa-wikipedia-w",
    link: "/zh-tw/wiki/",
  }
]);
