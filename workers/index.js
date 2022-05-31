import { animatorName, animatorDesc } from "./animator.js";
import { btn_lang } from "./elements.js";
import { checkLang } from "./funs.js";

document.querySelectorAll(".product-img").forEach(e => {
  e.addEventListener("click", function(event) {
    const alt = event.target.alt;
    switch (alt) {
      case "posyou":
        window.open("https://youtube.com/PosYou");
        break;
      case "meka":
        window.open("https://meka.soatra.com");
        break;
      case "paperpen":
        window.open("https://paperpen.soatra.com");
        break;
      case "lab":
        window.open("https://lab.soatra.com");
        break;
      case "book-library":
        window.open("https://booklibrary.soatra.com");
        break;
    }
  });
});

document.querySelector(".profile").addEventListener("click", function() {
  window.open("https://www.facebook.com/Soatra/");
});

window.addEventListener("load", function() {
  checkLang();
  btn_lang.onclick = animatorDesc;
  setTimeout(animatorName, 2000);
});
