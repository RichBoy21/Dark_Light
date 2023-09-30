import {
  container_home,
  container_author,
  container_companies,
  container_articles,
} from "./variables.js";

import {
  container_footer_home,
  container_footer_articles,
  container_footer_companies,
  container_footer_author,
} from "./variables.js";

//  header ----------------------------------------
function createHeader() {
  const containers = [
    container_home,
    container_author,
    container_companies,
    container_articles,
  ];

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
    containers[i] === null
      ? (containers[i] = `<div> </div>`)
      : (containers[i].innerHTML = headerHTML);
  }
}

//  main ------------------------------------------
//  footer ----------------------------------------

function createFooter() {
  const containers = [
    container_footer_home,
    container_footer_articles,
    container_footer_companies,
    container_footer_author,
  ];

  const footerHTML = `<div class="footer-messengers">
                                  <img src="./images/footer/logo.svg" alt="logo" id="messengers-logo">
                                        <ul class="ul-footer-messengers" >
                                            <li><a href="https://www.facebook.com" target="_blank"><img src="./images/footer/4.svg" alt="facebook"></a>
                                            </li>
                                            <li><a href="https://twitter.com" target="_blank"><img src="./images/footer/Frame.svg" alt="twitter"></a>
                                            </li>
                                            <li><a href="https://www.instagram.com" target="_blank"><img src="./images/footer/Frame-2.svg" alt="in"></a>
                                            </li>
                                            <li><a href="https://www.instagram.com" target="_blank"><img src="./images/footer/1.svg"
                                                        alt="instagram"></a></li>
                                        </ul>
                            </div>
                            <div class="footer-explore">
                                <h2>Explore</h2>
                                <ul>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Home"><p>Home</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="About"><p>About</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Articles"><p>Articles</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Our Store"><p>Our Store</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Contact Us"><p>Contact Us</p></li><br>
                                </ul>
                            </div>
                            <div class="footer-utility-pages">
                                <h2>Utility Pages</h2>
                                <ul>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Style Guide"><p>Style Guide</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="404 Not Found"><p>404 Not Found</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Password Protected"><p>Password Protected</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Licenses"><p>Licenses</p></li><br>
                                    <li><img src="./images/footer/IMAGE.svg" alt="Changelog"><p>Changelog</p></li><br>
                                </ul>
                            </div>
                            <div class="footer-keep-in-Touch">
                                <h2>Keep in Touch</h2>
                                <div>
                                    <label id="one">Address : <p id="one-p">24A Kingston St, Los Vegas <br> NC 28202, USA.</p></label>
                                    <label id="two">Mail :<p id="two-p">support@pages.com</p></label>
                                    <label id="three">Phone : <p id="three-p">(+22) 123 - 4567 - 900</p></label>
                                </div>
                            </div>`;

  containers.forEach((container) =>
    container === null
      ? (container = `<div> </div>`)
      : (container.innerHTML = footerHTML)
  );
}
export { createHeader, createFooter };
