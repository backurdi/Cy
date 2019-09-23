import "../css/ydelser.scss";
import {
  insertElement
} from "../reusable/reusable";
// import $ from 'jquery';

const memberImagePath = require.context("../img", true);

insertElement("nav", "nav.html");
insertElement("footer", "footer.html");

const link = document.querySelectorAll(".toggle-nav ul li a");

const serviceList = [{
  iværksætteri: {
    img: `${memberImagePath("./ydelser-revision.png", true)}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
    order: 1
  },
  rådgivning: {
    img: `${memberImagePath("./ydelser-revision.png", true)}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
    order: 2
  },
  revision: {
    img: `${memberImagePath("./ydelser-revision.png", true)}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
    order: 1
  },
  skat: {
    img: `${memberImagePath("./ydelser-revision.png", true)}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
    order: 2
  },
  omstruktureringer: {
    img: `${memberImagePath("./ydelser-revision.png", true)}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
    order: 1
  }
}];

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseenter', (el) => {
    if (!el.target.parentNode.classList.contains('active')) {
      linkSelect(el);
    }
  });
}

const contentContainer = document.getElementById("content-main");
const linkSelect = el => {
    const linkContainer = el.target.parentNode;

    const selectedLink = el.target.dataset.id;
    // console.log(selectedLink);
    const contentImg = `
    <div class="content-img">
        <img src="${serviceList[0][selectedLink].img}" alt="">
    </div>
  `;
    const contentText = `
  <div class="content-text">
      <p>
      ${serviceList[0][selectedLink].content}
      </p>
      <div class="read-more">
          <a class="read-more" href="${serviceList[0][selectedLink].link}">Læs mere</a>
      </div>
  </div>
  `;
    if (!el.target.parentNode.classList.contains("active")) {
      document.querySelector(".active").classList = "";
      linkContainer.classList = "active";

      for (let i = 0; i < contentContainer.children.length; i++) {
        contentContainer.children[i].classList.add("transparent");
      }
      contentContainer.innerHTML = "";

      if (serviceList[0][selectedLink].order === 1) {
        contentContainer.insertAdjacentHTML(
          "afterbegin",
          contentImg + contentText
        );
      } else if (serviceList[0][selectedLink].order === 2) {
        contentContainer.insertAdjacentHTML(
          "afterbegin",
          contentText + contentImg
        );
      }

      for (let i = 0; i < contentContainer.children.length; i++) {
        contentContainer.children[i].animate([{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: 500
        });
      }
    };