// main.js

import { buildMenu, displayArticle } from "./articles";
import { nav } from "./nav";
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  // Charger les articles depuis le fichier JSON
  fetch("articles.JSON")
    .then(response => response.json())
    .then(data => {
      // Construire le menu
      buildMenu(data, displayArticle);
    });
});
