"use strict";
let logo = document.getElementById("logo");

let menu = document.getElementById("menu");
let icons = document.getElementById("icons");

logo.addEventListener('click', function () {
    menu.classList.toggle("show-menu");
    icons.classList.toggle("show-icons");
});

let filter = document.getElementById("filter");
let filter_btn = document.getElementById("filter_btn");

filter_btn.addEventListener('click', function () {
    filter.classList.toggle("show-filter");
});