export function buildMenu(data, onClickCallback) {
  const menu = document.getElementById("menu");

  data.forEach(article => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = article.title;
    link.addEventListener("click", () => onClickCallback(article));
    menu.appendChild(link);
  });
}

export function displayArticle(article) {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>${article.title}</h2>
    <p>Date: ${article.date}</p>
    <img src="${article.image}" alt="${article.title}">
    <p>${article.content}</p>
  `;
}