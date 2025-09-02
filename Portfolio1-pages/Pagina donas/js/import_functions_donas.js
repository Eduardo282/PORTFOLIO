import { showBoxes } from "./donas.js";
import { links } from "./donas.js";
import { menuHamburguer } from "./donas.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
  showBoxes(".questions-item", ".questions-item-div");
  links(".home", ".about", ".products", ".faqs", ".contact-us");
  menuHamburguer(".menu-hamburguer",".menu-mobile");
});