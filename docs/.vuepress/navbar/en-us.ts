import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/en-us/",
  {
    text: "Related Links",
    icon: "list-ol",
    link: "/en-us/links",
  },
  {
    text: "Notes",
    icon: "book",
    link: "/en-us/notes/",
  },
  {
    text: "Code Snippets",
    icon: "book",
    link: "/en-us/example-scripts/",
  },
  {
    text: "Tips and Tricks",
    icon: "book",
    link: "/en-us/tips-and-tricks/",
  },
]);
