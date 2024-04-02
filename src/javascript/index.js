const sections = document.querySelectorAll(".section");
const itemsNav = document.querySelectorAll(".menu-item");

const observerF = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const itemA = Array.from(itemsNav).find(
        (item) => item.dataset.url === entry.target.id
      );
      itemA.classList.add("activateLink");
      for (const item of itemsNav) {
        if (item != itemA) {
          item.classList.remove("activateLink");
        }
      }
    }
  });
};

const observer = new IntersectionObserver(observerF, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

sections.forEach((section) => observer.observe(section));

// aside menu mobile

const exitMenu = document.getElementById("exitMenu");
const showMobile = document.getElementById("showMenu");
const boxMobile = document.getElementById("boxMenuMobile");
const menu = document.getElementById("mobilToggle");
const linkHow = document.getElementById("linkMenu1");
const linkDownload = document.getElementById("linkMenu2");
let showMenuMobile = false;

const showMenu = () => {
  boxMobile.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
};
const hiddenMenu = () => {
  boxMobile.style.transform = "translateX(810px)";
  menu.style.transform = "translateX(210px)";
};

showMobile.addEventListener("click", showMenu);
exitMenu.addEventListener("click", hiddenMenu);

linkHow.onclick = () => {
  linkHow.classList.add("active-mobile");
  linkDownload.classList.remove("active-mobile");
  hiddenMenu();
};

linkDownload.onclick = () => {
  linkDownload.classList.add("active-mobile");
  linkHow.classList.remove("active-mobile");
  hiddenMenu();
};

// Dinamic change image donwload

const imgElemetn = document.getElementById("img__download");

var img = 1;
const changeImg = () => {
  imgElemetn.src = `/src/img/svg${img}.svg`;
  img++;
  if (img >= 6) {
    img = 1;
  }
};

setInterval(changeImg, 3000);
