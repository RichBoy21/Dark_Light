import {
  container_home,
  container_author,
  container_companies,
  container_articles,
} from "./variables.js";

function createHeader() {
  const containers = [
    container_home,
    container_author,
    container_companies,
    container_articles,
  ];
  console.log(containers);
  for (let i = 0; i < containers.length; i++) {
    const headerHTML = `
      <div class="div_links"> 
        <img src="./images/header/IMAGE.svg" alt="logo" id="logo">
        <a href="https://www.facebook.com" target="_blank"><img src="./images/header/Frame.svg" alt="facebook" id="facebook"  class="link-headr"></a>
        <a href="https://www.google.com/search?client=safari&rls=en&q=twitter&ie=UTF-8&oe=UTF-8" target="_blank"><img
                src="./images/header/fogel.svg" alt="twitter" id="twitter"  class="link-headr"></a>
        <a href="https://www.google.com/search?client=safari&rls=en&q=instagram&ie=UTF-8&oe=UTF-8" target="_blank"><img
        src="./images/header/instagram.svg" alt="instagram" id="instagram"  class="link-headr"></a>
      </div>
      <div class="div_right"> 
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="author.html">Author</a></li>
          <li><a href="companies.html">Companies</a></li>
          <li><a href="articles.html">Articles</a></li>
        </ul>
        <button class="btn-header">Order Today</button>
      </div>`;

    containers[i].innerHTML = headerHTML;
  }
}

export { createHeader };
