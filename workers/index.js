import animatorName from "./animator.js";

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
    }
  });
});

document.querySelector(".profile").addEventListener("click", function() {
  window.open("https://www.facebook.com/Soatra/");
});

window.addEventListener("load", function() {
  setTimeout(animatorName, 2000);
});
