//  header ----------------------------------------
// import { container_home } from "./variables.js";
// import { renderHeader } from "./function.js";
// console.log(container_home);

const container_home = document.querySelector(".home-header-container");
console.log(container_home);
function renderHeader() {
  const headerLinks = document.createElement("div");
  headerLinks.className = "div_links";

  const headerRight = document.createElement("div");
  headerRight.className = "div_right";

  headerLinks.innerHTML = `<img src="./images/header/Vector.svg" alt="">
                                            <img src="./images/header/Vector-2.svg" alt="">
                                            <a href="https://www.facebook.com" target="_blank"><img src="./images/header/Frame.svg" alt=""></a>
                                            <a href="https://www.google.com/search?client=safari&rls=en&q=twitter&ie=UTF-8&oe=UTF-8" target="_blank"><img
                                                    src="./images/header/fogel.svg" alt=""></a>
                                            <a href="https://www.google.com/search?client=safari&rls=en&q=instagram&ie=UTF-8&oe=UTF-8" target="_blank"><img
                                    src="./images/header/instagram.svg" alt=""></a>`;

  headerRight.innerHTML = `   <ul>
                                            <li> <a href="home.html">Home</a></li>
                                            <li> <a href="author.html">author</a></li>
                                            <li> <a href="companies.html">Companies</a></li>
                                            <li> <a href="articles.html">Articles</a></li>
                                    </ul>
                                    <div class="btn-header"> <button>Order Today</button></div>`;

  container_home.append(headerLinks, headerRight);
}

renderHeader();
