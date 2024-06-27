import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/en-us/",
  {
    text: "Related Links",
    icon: "list-ol",
    link: "/en-us/posts/links",
  },
  {
    text: "Notes",
    icon: "book",
    link: "/en-us/posts/notes/",
  },
  {
    text: "Code Snippets",
    icon: "book",
    link: "/en-us/posts/snippets/",
  },
  {
    text: "Tips and Tricks",
    icon: "book",
    link: "/en-us/posts/tips-and-tricks/",
  },
]);
