import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/zh-tw/",
  { text: "相關連結", icon: "list-ol", link: "/zh-tw/posts/links/" },
  { text: "筆記", icon: "book", link: "/zh-tw/posts/notes/" },
  { text: "程式碼片段", icon: "book", link: "/zh-tw/posts/snippets/" },
  { text: "小技巧", icon: "book", link: "/zh-tw/posts/tips-and-tricks/" },
]);
