/* __content__ */
// nav bar creation

/* dynamic nav bar nav bar  */
//global variable
const sections = document.querySelectorAll("section"); //node list=> array like object of sections

const navList = document.querySelector(".nav-list");

const docFragnment = document.createDocumentFragment();
sections.forEach((section) => {
  const item = document.createElement("li");
  item.classList.add("list-item");
  item.innerHTML = `${section.dataset.name}`;
  docFragnment.appendChild(item);
});
navList.appendChild(docFragnment);

const expandButton = document.querySelector("header .list-expand");
expandButton.addEventListener("click", () => {
  document.querySelector("header").classList.toggle("active");
});

const navItems = document.querySelectorAll(".list-item");

navItems.forEach((item, ind) => {
  item.addEventListener("click", () => {
    sections[ind].scrollIntoView({ behavior: "smooth" });
  });
});

/* __home section__ */
const homeImage = document.getElementById("home-img");

const pharmacyName = document.getElementById("Pharmacy-name-container");

const home = document.getElementById("home");

pharmacyName.addEventListener("mouseover", () => {
  home.classList.add("active");
});
pharmacyName.addEventListener("mouseleave", () => {
  home.classList.remove("active");
});

/* __about section__ */

const aboutContainer = document.querySelector(".about-container");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (
      section.clientHeight / 2 > section.getBoundingClientRect().top &&
      section.getBoundingClientRect().top > -(section.clientHeight / 2)
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
if (window.innerWidth > 800) {
  aboutContainer.style.marginTop = `${aboutMargin(
    about.clientHeight,
    aboutContainer.clientHeight
  )}px`;
  aboutContainer.style.marginBottom = `${aboutMargin(
    about.clientHeight,
    aboutContainer.clientHeight
  )}px`;
} else {
  aboutContainer.style.marginTop = "0";
  aboutContainer.style.marginBottom = "0";
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    aboutContainer.style.marginTop = `${aboutMargin(
      about.clientHeight,
      aboutContainer.clientHeight
    )}px`;
    aboutContainer.style.marginBottom = `${aboutMargin(
      about.clientHeight,
      aboutContainer.clientHeight
    )}px`;
  } else {
    aboutContainer.style.marginBottom = "0";
    aboutContainer.style.marginTop = "0";
  }
});

function aboutMargin(a, b) {
  return (a - b) / 2;
}

/* ____contact section___ */

/* const contactSection = document.getElementById("contact");

window.addEventListener('scroll',)

const contactAnimation = () => {
  if(contactSection.getBoundingClientRect.top)
 */
