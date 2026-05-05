const target = document.getElementById("target");

for (let i = 0; i < picArray.length; i++) {

  const article = document.createElement("article");
  article.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = picArray[i].title;

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = picArray[i].image.medium;
  img.alt = picArray[i].title;

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = picArray[i].caption;

  const p = document.createElement("p");
  p.textContent = picArray[i].description;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);

  target.appendChild(article);
}