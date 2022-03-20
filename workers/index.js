$(".product-img").on("click", function(event) {
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

$(".profile").on("click", function() {
  window.open("https://www.facebook.com/Soatra/")
});
