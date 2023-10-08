import {
  container_footer_home,
  container_footer_articles,
  container_footer_companies,
  container_footer_author,
} from "./variables.js";

import {
  cards_main,
  cards_companies,
  cards_articles,
  cards_articles_two,
} from "./cards.js";

function createAuthor() {
  cards_main.forEach((el) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.innerHTML = `
      <img src="${el.img}" alt="">
      <div class="cards-info">
        <h3>${el.title}</h3>
        <p class="price">${el.price}</p>
        <p class="text">${el.text}</p>
        <div class="link">
          <div></div>
          <p>${el.link}</p>
        </div>
      </div>
    `;
    const cardItems = document.getElementById("card-items");
    if (cardItems) {
      cardItems.appendChild(divCard);
    }
  });
}

function createCompaniesOne() {
  const h1 = document.createElement("h1");
  h1.classList.add("section_title");
  h1.innerText = "Trusted By The Best";

  const line = document.createElement("hr");
  line.classList.add("line");
  const menu_list = document.createElement("ul");

  cards_companies.forEach((card) => {
    const list_item = document.createElement("li");
    const img_item = document.createElement("img");
    const h2_item = document.createElement("h2");
    const p_item = document.createElement("p");

    img_item.src = card.img;
    h2_item.innerText = card.title;
    p_item.innerText = card.text;

    list_item.append(img_item, h2_item, p_item);
    menu_list.append(list_item);
  });

  const cardItems = document.querySelector(".main_first_section");
  if (cardItems) {
    const container = document.createElement("div");
    container.append(h1, line, menu_list);
    cardItems.append(container);
  }
}
function createCompaniesTwo() {
  const div_item = document.createElement("div");
  div_item.classList.add("container");

  const h2_item_two = document.createElement("h2");
  h2_item_two.innerText = "Get Book Copy Today!";
  const line_two = document.createElement("hr");
  line_two.classList.add("line");
  const p_item_two = document.createElement("p");
  p_item_two.innerText =
    "We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.";

  const img_item_two = document.createElement("img");
  img_item_two.src = "./images/main/main_companies/IMAGE.png";

  const second_section = document.querySelector(".main_second_section");
  if (second_section) {
    const container = document.createElement("div");
    container.append(h2_item_two, line_two, p_item_two);
    second_section.append(container, img_item_two);
  }
}

function createArticlesOne() {
  const h1 = document.createElement("h1");
  h1.classList.add("articles_title");
  h1.innerText = "What Will You Learn?";

  const line = document.createElement("hr");
  const img_articles = document.createElement("img");
  img_articles.src = "./images/main/main_articles/Frame.svg";

  const div_container = document.createElement("div");

  cards_articles.forEach((card) => {
    const div_card = document.createElement("div");
    div_card.classList.add("cards_articles");
    const p_number = document.createElement("p");
    const p_text = document.createElement("p");

    p_number.innerText = card.number;
    p_text.innerText = card.text;
    div_container.append(p_number, p_text);
  });

  const articles_first_section = document.querySelector(
    ".articles_first_section"
  );
  if (articles_first_section) {
    const container = document.createElement("div");
    container.append(h1, line, div_container);
    articles_first_section.append(container, img_articles);
  }
}

function createArticlesTwo() {
  const h2 = document.createElement("h2");
  h2.classList.add("articles_title");
  h2.innerText = "Articles & Resources";
  const line = document.createElement("hr");

  const div_container = document.createElement("div");

  cards_articles_two.forEach((card) => {
    const img_articles_two = document.createElement("img");
    const h3 = document.createElement("h3");
    const p_text = document.createElement("p");
    const p_date = document.createElement("p");

    img_articles_two.src = card.img;
    h3.innerText = card.title;
    p_text.innerText = card.text;
    p_date.innerText = card.date;

    const div_card = document.createElement("div");
    div_card.classList.add("cards_articles_two");
    div_card.append(img_articles_two, h3, p_text, p_date);
    div_container.appendChild(div_card);
  });

  const articles_second_section = document.querySelector(
    ".articles_second_section"
  );

  if (articles_second_section) {
    const container = document.createElement("div");
    container.append(h2, line, div_container);
    articles_second_section.appendChild(container);
  }
}

function createFooter() {
  const containers = [
    container_footer_home,
    container_footer_articles,
    container_footer_companies,
    container_footer_author,
  ];
  // Создаем раздел для мессенджеров
  const messengersDiv = document.createElement("div");
  messengersDiv.classList.add("footer-messengers");

  // Создаем логотип
  const logoImg = document.createElement("img");
  logoImg.src = "./images/footer/logo.svg";
  logoImg.alt = "logo";
  logoImg.id = "messengers-logo";

  // Создаем список для ссылок на мессенджеры
  const socialList = document.createElement("ul");
  socialList.classList.add("ul-footer-messengers");

  // Массив с данными о социальных сетях
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      imgSrc: "./images/footer/4.svg",
      alt: "facebook",
    },
    {
      href: "https://twitter.com",
      imgSrc: "./images/footer/Frame.svg",
      alt: "twitter",
    },
    {
      href: "https://www.instagram.com",
      imgSrc: "./images/footer/Frame-2.svg",
      alt: "in",
    },
    {
      href: "https://www.instagram.com",
      imgSrc: "./images/footer/1.svg",
      alt: "instagram",
    },
  ];

  // Создаем элементы списка для каждой ссылки
  socialLinks.forEach((linkData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = linkData.href;
    link.target = "_blank";
    const img = document.createElement("img");
    img.src = linkData.imgSrc;
    img.alt = linkData.alt;
    link.append(img);
    listItem.append(link);
    socialList.append(listItem);
  });

  const div_social_list = document.createElement("div");
  div_social_list.classList.add("logo_social");
  // Добавляем созданные элементы в раздел для мессенджеров
  div_social_list.append(logoImg, socialList);

  // Создаем раздел "Explore"
  const exploreDiv = document.createElement("div");
  exploreDiv.classList.add("footer-explore");

  // Заголовок "Explore"
  const exploreHeading = document.createElement("h2");
  exploreHeading.textContent = "Explore";

  // Создаем список для раздела "Explore"
  const exploreList = document.createElement("ul");

  // Массив с данными для раздела "Explore"
  const exploreLinks = [
    { imgSrc: "./images/footer/IMAGE.svg", alt: "Home", text: "Home" },
    { imgSrc: "./images/footer/IMAGE.svg", alt: "About", text: "About" },
    { imgSrc: "./images/footer/IMAGE.svg", alt: "Articles", text: "Articles" },
    {
      imgSrc: "./images/footer/IMAGE.svg",
      alt: "Our Store",
      text: "Our Store",
    },
    {
      imgSrc: "./images/footer/IMAGE.svg",
      alt: "Contact Us",
      text: "Contact Us",
    },
  ];

  // Создаем элементы списка для каждой ссылки в разделе "Explore"
  exploreLinks.forEach((linkData) => {
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    img.src = linkData.imgSrc;
    img.alt = linkData.alt;
    const text = document.createElement("p");
    text.textContent = linkData.text;
    listItem.append(img, text);

    exploreList.append(listItem);
  });

  // Добавляем заголовок и список в раздел "Explore"
  exploreDiv.append(exploreHeading, exploreList);

  // Создаем раздел "Utility Pages"
  const utilityDiv = document.createElement("div");
  utilityDiv.classList.add("footer-utility-pages");

  // Заголовок "Utility Pages"
  const utilityHeading = document.createElement("h2");
  utilityHeading.textContent = "Utility Pages";

  // Создаем список для раздела "Utility Pages"
  const utilityList = document.createElement("ul");

  // Массив с данными для раздела "Utility Pages"
  const utilityLinks = [
    {
      imgSrc: "./images/footer/IMAGE.svg",
      alt: "Style Guide",
      text: "Style Guide",
    },
    {
      imgSrc: "./images/footer/IMAGE.svg",
      alt: "404 Not Found",
      text: "404 Not Found",
    },
    {
      imgSrc: "./images/footer/IMAGE.svg",
      alt: "Password Protected",
      text: "Password Protected",
    },
    { imgSrc: "./images/footer/IMAGE.svg", alt: "Licenses", text: "Licenses" },
    {
      imgSrc: "./images/footer/IMAGE.svg",
      alt: "Changelog",
      text: "Changelog",
    },
  ];

  // Создаем элементы списка для каждой ссылки в разделе "Utility Pages"
  utilityLinks.forEach((linkData) => {
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    img.src = linkData.imgSrc;
    img.alt = linkData.alt;
    const text = document.createElement("p");
    text.textContent = linkData.text;
    listItem.append(img);
    listItem.append(text);
    utilityList.append(listItem);
  });

  // Добавляем заголовок и список в раздел "Utility Pages"
  utilityDiv.append(utilityHeading, utilityList);

  // Создаем раздел "Keep in Touch"
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("footer-keep-in-Touch");

  // Заголовок "Keep in Touch"
  const contactHeading = document.createElement("h2");
  contactHeading.textContent = "Keep in Touch";

  // Создаем контейнер для контактной информации
  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.classList.add("date");

  // Создаем метки и текст для адреса, почты и телефона
  const addressLabel = document.createElement("label");
  addressLabel.id = "one";
  addressLabel.textContent = "Address:";
  const addressText = document.createElement("p");
  addressText.id = "one-p";
  addressText.innerHTML = "24A Kingston St, Los Vegas <br> NC 28202, USA.";

  const mailLabel = document.createElement("label");
  mailLabel.id = "two";
  mailLabel.textContent = "Mail:";
  const mailText = document.createElement("p");
  mailText.id = "two-p";
  mailText.textContent = "support@pages.com";

  const phoneLabel = document.createElement("label");
  phoneLabel.id = "three";
  phoneLabel.textContent = "Phone:";
  const phoneText = document.createElement("p");
  phoneText.id = "three-p";
  phoneText.textContent = "(+22) 123 - 4567 - 900";

  // Добавляем метки и текст в контейнер контактной информации

  addressLabel.append(addressText);
  mailLabel.append(mailText);
  phoneLabel.append(phoneText);

  contactInfoContainer.append(addressLabel, mailLabel, phoneLabel);

  // Добавляем заголовок и контейнер с контактной информацией в раздел "Keep in Touch"

  contactDiv.append(contactHeading, contactInfoContainer);

  // Добавляем все созданные разделы в футер

  messengersDiv.append(div_social_list, exploreDiv, utilityDiv, contactDiv);

  // Добавляем футер в контейнеры
  containers.forEach((container) => {
    if (container) {
      container.append(messengersDiv);
    }
  });
}

export {
  createFooter,
  createAuthor,
  createCompaniesOne,
  createCompaniesTwo,
  createArticlesOne,
  createArticlesTwo,
};
