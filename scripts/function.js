import {
  container_footer_home,
  container_footer_articles,
  container_footer_companies,
  container_footer_author,
} from "./variables.js";
import { cards_main } from "./cards.js";

const div = document.querySelector("#card-items");

function createAuthor() {
  cards_main.forEach((el) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.innerHTML = `    <img src="${el.img}" alt="">
                        <div class="cards-info">
                                <h3>${el.title}</h3>
                                <p id="price">${el.price}</p>
                                <p id="text">${el.text}</p>
                            <div id="link">
                                    <div> </div>
                                    <p>${el.link}</p>
                            </div>
                        </div>
`;
    div.append(divCard);
  });
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
export { createFooter, createAuthor };
