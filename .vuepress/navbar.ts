import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "相關連結", icon: "list-ol", link: "/posts/links/" },
  { text: "筆記", icon: "book", link: "/posts/notes/" },
  { text: "程式碼片段", icon: "book", link: "/posts/snippets/" },
  { text: "小技巧", icon: "book", link: "/posts/tips-and-tricks/" },
]);
