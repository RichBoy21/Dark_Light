//  header ----------------------------------------
import {
  container_home,
  container_author,
  container_companies,
  container_articles,
} from "./variables.js";

function createHeader() {
  const headerLinks = document.createElement("div");
  headerLinks.className = "div_links";

  const headerRight = document.createElement("div");
  headerRight.className = "div_right";

  headerLinks.innerHTML = ` <img src="./images/header/IMAGE.svg" alt="logo" id="logo">
                                              <a href="https://www.facebook.com" target="_blank"><img src="./images/header/Frame.svg" alt="facebook" id="facebook"  class="link-headr"></a>
                                              <a href="https://www.google.com/search?client=safari&rls=en&q=twitter&ie=UTF-8&oe=UTF-8" target="_blank"><img
                                                      src="./images/header/fogel.svg" alt="twitter" id="twitter"  class="link-headr"></a>
                                              <a href="https://www.google.com/search?client=safari&rls=en&q=instagram&ie=UTF-8&oe=UTF-8" target="_blank"><img
                                      src="./images/header/instagram.svg" alt="instagram" id="instagram"  class="link-headr"></a>`;

  headerRight.innerHTML = `   <ul>
                                              <li> <a href="home.html">Home</a></li>
                                              <li> <a href="author.html">author</a></li>
                                              <li> <a href="companies.html">Companies</a></li>
                                              <li> <a href="articles.html">Articles</a></li>
                                      </ul>
                                       <button class="btn-header">Order Today</button>`;

  return { headerLinks, headerRight };
}
function renderHeader() {
  const homeHeader = createHeader();
  container_home.append(homeHeader.headerLinks, homeHeader.headerRight);

  const authorHeader = createHeader();
  container_author.append(authorHeader.headerLinks, authorHeader.headerRight);

  const companiesHeader = createHeader();
  container_companies.append(
    companiesHeader.headerLinks,
    companiesHeader.headerRight
  );

  const articlesHeader = createHeader();
  container_articles.append(
    articlesHeader.headerLinks,
    articlesHeader.headerRight
  );
}
export { renderHeader };
