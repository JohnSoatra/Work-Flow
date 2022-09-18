import { animatorName, animatorDesc } from "./animator.js";
import { btn_lang } from "./elements.js";
import { checkLang } from "./funs.js";

document.querySelector(".profile").addEventListener("click", function() {
  window.open("https://www.facebook.com/Soatra/");
});

window.addEventListener("load", function() {
  checkLang();
  btn_lang.onclick = animatorDesc;
  setTimeout(animatorName, 2000);
});
