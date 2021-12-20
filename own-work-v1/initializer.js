let oldHeight = 0;
const classPairs = {
  "w-": "width",
  "h-": "height",
  
  // backdrop-filter
  "bfb-": "backdropFilter",
  
  // border
  "bw-": "borderWidth",
  "blw-": "borderLeftWidth",
  "brw-": "borderRightWidth",
  "btw-": "borderTopWidth",
  "bbw-": "borderBottomWidth",
  
  // border radius
  "br-": "borderRadius",
  "btlr-": "borderTopLeftRadius",
  "btrr-": "borderTopRightRadius",
  "bblr-": "borderBottomLeftRadius",
  "bbrr-": "borderBottomRightRadius",

  // font-size
  "fs-": "fontSize",
  
  // padding
  "p-": "padding",
  "pl-": "paddingLeft",
  "pr-": "paddingRight",
  "pt-": "paddingTop",
  "pb-": "paddingBottom",
  
  // margin
  "m-": "margin",
  "ml-": "marginLeft",
  "mr-": "marginRight",
  "mt-": "marginTop",
  "mb-": "marginBottom",

  // min-width, min-height
  "mw-": "minWidth",
  "mh-": "minHeight",

  // z-index
  "z-": "zIndex"
};
String.prototype.extractValue = function() {
  let result = "";
  for (const char of this.toString()) {
    if (char !== " ") {
      result += char;
    } else {
      return result;
    }
  }
  return result;
}
function maxSize(children) {
  let width = 0;
  let height = 0;
  children.map((_, _child) => {
    const child = $(_child);
    const currentHeight = child.height();
    const currentWidth = child.width();
    if (width < currentWidth) {
      width = currentWidth;
    }  
    if (height < currentHeight) {
      height = currentHeight;
    }  
  })  
  return ({ width, height });
}  
function setBoxSize(boxes) {
  boxes.map((_, _box) => {
    const box = $(_box);
    const size = maxSize(box.children());
    box.css("width", size.width);
    box.css("height", size.height);
  });  
}
function validValue(short, value) {
  let _value = +value || value;
  switch (short) {
    case "bfb-": _value = `blur(${value})`; break;
  }
  return _value;
}
function getClassValue(classes, short) {
  const slices = classes.split(short);
  const lastIndex = slices.length - 1;
  if (slices.length > 1) {
    return slices[lastIndex].extractValue();
  } else {
    return null;
  }
}
function apply(short, propertyName) {
  $(`[class*='${short}']`).map((_, _e) => {
    const e = $(_e);
    const value = getClassValue(` ${e.attr("class")} `, ` ${short}`);
    value && e.css(propertyName, validValue(short, value));
  });
}
function applyAll() {
  for (const short in classPairs) {
    apply(short, classPairs[short]);
  }
}
function setRootHeight() {
  const windowHeight = $(window).height();
  if (windowHeight !== oldHeight) {
    $(".root").css("minHeight", windowHeight);
    oldHeight = windowHeight;
  }
}
function initializer() {
  setRootHeight();
  $(window).on("resize", () => setRootHeight());
  setBoxSize($(".box"));
  applyAll();
}
// initializer()
$(initializer);