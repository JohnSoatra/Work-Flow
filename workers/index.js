$(".old-container").css({
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
  "airplane.jpg",
  "a-man.jpg",
  "diamond.jpg",
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
  "#9fcde0",
  "#c1aaf6",
  "#a5bed5",
  "#ff829a",
  "#f2d45a"
];

let index = null;
let isFirstTime = true;
const fetchedImages = {};

function randomIndex() {
  let random;
  do {
   random = Math.floor(Math.random() * 5);
  } while (random === index);
  return random;
}
async function backgroundAnimator() {
  index = randomIndex();
  const imageUrl = images[index];
  const color = colors[index];
  const nameColor = nameColors[index];
  let objectUrl = fetchedImages[imageUrl];
  if (!objectUrl) {
    const res = await fetch(`images/${imageUrl}`);
    const arrayBuffer = await res.arrayBuffer();
    const _objectUrl = URL.createObjectURL(new Blob([arrayBuffer]));
    fetchedImages[imageUrl] = _objectUrl;
    objectUrl = _objectUrl;
  }
  if (isFirstTime) {
    isFirstTime = false;
    $(".div-background-second").css(
      "backgroundImage",
      `url(${objectUrl})`
    );
    $(".div-background-first").css(
      "backgroundImage",
      `url(${objectUrl})`
    );
    $(".cover").addClass("d-n");
  } else {
    $(".div-background-second").css({
      display: "none",
      backgroundImage: `url(${objectUrl})`
    });
    $(".div-background-second").fadeIn(1000, () => {
      $(".div-background-first").css(
        "backgroundImage",
        `url(${objectUrl})`
      );
    });
  }
  $(":root").css("--header-color", color + "e6");
  $(":root").css("--one-color", nameColor);
  $(".footer").css("borderColor", nameColors[index] + "73");
  setTimeout(backgroundAnimator, 10000);
}
backgroundAnimator();