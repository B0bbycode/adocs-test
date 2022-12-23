'use strict'

// Theme switch

const themeSwitch = document.querySelector(".theme-switch input")
const themeImg = document.querySelector('.theme-img img')

themeSwitch.addEventListener("click", () => {

  const isChecked = themeSwitch.checked;
  
  localStorage.setItem("theme", isChecked)
  
  isChecked
  ? document.body.classList.add("light")
  : document.body.classList.remove("light")

  themeImg.classList.toggle('change-theme-img-position')
  themeImg.src = themeImg.src.includes("moon.svg") ?  "images/sun.svg" :  "images/moon.svg"

});

const savedTheme = localStorage.getItem("theme")

if (savedTheme === "true") {
  document.body.classList.add("light")
  themeSwitch.checked = true
}

// Hamburger menu

const hamburgerBtn = document.querySelector('.hamburger-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')

let isOpen = false

hamburgerBtn.addEventListener('click',() => {

  hamburgerMenu.classList.toggle('show-hamburger')

  // Prevent scroll when mobile menu is opened

  isOpen = !isOpen

  if(isOpen){
    document.body.style = "overflow: hidden;"
  }
  
  else{
    document.body.style = "overflow: auto;"
  }

})

// Changelog in dropdown

const changelogBtn = document.querySelector('.dropdown-link ')
const changelogMenu = document.querySelector('.dropdown-menu')
const stateImg = document.querySelector('.dropdown-link .plus-sign ') // Img that shows whether the links are open or not

changelogBtn.addEventListener('click',() => {
  stateImg.classList.toggle('rotate')
  changelogMenu.classList.toggle('show')
})