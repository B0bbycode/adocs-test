"use strict";

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("aside");
const overlay = document.querySelector(".overlay");

const openMenu = () => {
  menu.classList.add("show-aside");
  document.documentElement.style.overflowY = "hidden";
  overlay.style.visibility = "visible";
};

const closeMenu = () => {
  menu.classList.remove("show-aside");
  document.documentElement.style.overflowY = "scroll";
  overlay.style.visibility = "collapse";
};

menuBtn.addEventListener("click", function (e) {
  if (e.target) {
    openMenu();
  } else {
    closeMenu();
  }
});

overlay.addEventListener("click", () => {
  closeMenu();
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

const targetHeadlines = document.querySelectorAll("article h2");
const targetLinks = Array.from(document.querySelectorAll("#secondary-nav a"));

const observer = new IntersectionObserver((enteries) => {
  if (enteries[0].isIntersecting) {
    const heading = enteries[0].target;
    const targetLink = targetLinks.find(
      (link) => link.textContent === heading.textContent
    );
    console.log(targetLink);
    targetLinks.forEach((link) => link.classList.remove("active"));
    targetLink.classList.add("active");
  }
}, {});

targetHeadlines.forEach((heading) => {
  observer.observe(heading);
});

const summary = document.querySelector(".summary");

summary.addEventListener("click", (e) => {
  e.preventDefault();
  summary.style.cursor = "default";
});
