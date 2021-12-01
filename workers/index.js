$(".container").css({
  minHeight: $(window).height(),
});
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
  }
});
const images = [
  "airplan.jpg",
  "a-man.jpg",
  "dimon.jpg",
  "hold-liquid.jpg",
  "carry-color.jpg"
];
const colors = [
  "#8a5c94",
  "#625e99",
  "#5d6780",
  "#be86b9",
  "#f4b5d4"
];
const nameColors = [
  "#9a0047",
  "#c1aaf6",
  "#02425f",
  "#c1217c",
  "#ff568b"
]

let firstTime = true;
let i = 0;
let j = 1;
function backgroundAnimator() {
  if (!firstTime) {
    const imageUrl = images[i];
    const color = colors[i];
    const nameColor = nameColors[i];

     $(".div-background-second").css({
       display: "none",
       backgroundImage: `url(../images/${imageUrl})`
     });
     $(".div-background-second").fadeIn(1000, () => {
       $(".div-background-first").css(
         "backgroundImage",
         `url(../images/${imageUrl})`
        );
     });
     $(".header").css("backgroundColor", color);
     $(".footer").css("borderColor", color + "73");
     $(".name").css("color", nameColor);
     $(".starter").css("color", nameColor);
     $(".product-name").css("color", nameColor);
  }
  else {
    firstTime = false;
  }

  i += j;
  if (i === images.length) {
    i = images.length - 2;
    j = -1;
  }
  else if (i === -1) {
    i = 1;
    j = 1;
  }
  setTimeout(backgroundAnimator, 10000);
}
backgroundAnimator();