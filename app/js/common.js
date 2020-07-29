"use strict";
let logo = document.getElementById("logo");

let menu = document.getElementById("menu");
let icons = document.getElementById("icons");

logo.addEventListener('click', function () {
    menu.classList.toggle("show-menu");
    icons.classList.toggle("show-icons");
});