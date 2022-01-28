const classPairsCss = {
  // size
  "w-": ["width", "px"],
  "h-": ["height", "px"],

  // position
  "t-": ["top", "px"],
  "b-": ["bottom", "px"],
  "l-": ["left", "px"],
  "r-": ["right", "px"],
  
  // backdrop-filter
  "bfb-": ["backdrop-filter", "px"],
  
  // border
  "bw-": ["border-width", "px"],
  "blw-": ["border-left-width", "px"],
  "brw-": ["border-right-width", "px"],
  "btw-": ["border-top-width", "px"],
  "bbw-": ["border-bottom-width", "px"],
  
  // border radius
  "br-": ["border-radius", "px"],
  "btlr-": ["border-top-left-radius", "px"],
  "btrr-": ["border-top-right-radius", "px"],
  "bblr-": ["border-bottom-left-radius", "px"],
  "bbrr-": ["border-bottom-right-radius", "px"],

  // border-color
  "bc-": ["border-color", "#"],
  "blc-": ["border-left-color", "#"],
  "brc-": ["border-right-color", "#"],
  "btc-": ["border-top-color", "#"],
  "bbc-": ["border-bottom-color", "#"],

  // background-color
  "bgc-": ["background-color", "#"],

  // color
  "c-": ["color", "#"],

  // font-size
  "fs-": ["font-size", "px"],

  // opacity
  "o-": ["opacity", "."],
  
  // padding
  "p-": ["padding", "px"],
  "pl-": ["padding-left", "px"],
  "pr-": ["padding-right", "px"],
  "pt-": ["padding-top", "px"],
  "pb-": ["padding-bottom", "px"],
  
  // margin
  "m-": ["margin", "px"],
  "ml-": ["margin-left", "px"],
  "mr-": ["margin-right", "px"],
  "mt-": ["margin-top", "px"],
  "mb-": ["margin-bottom", "px"],

  // min-width, min-height
  "mnw-": ["min-width", "px"],
  "mnh-": ["min-height", "px"],

  // max-width, max-height
  "mxw-": ["max-width", "px"],
  "mxh-": ["max-height", "px"],

  // z-index
  "z-": ["z-index", ""]
};

function extractValue(string) {
  let result = "";
  for (const char of string.toString()) {
    if (char !== " ") {
      result += char;
    } else {
      return result;
    }
  }
  return result;
}

function setRootHeight() {
  const windowHeight = $(window).height();
  $(".root").css("minHeight", windowHeight);
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

function maxWidth(children) {
  let width = 0;
  children.map((_, _child) => {
    const currentWidth = $(_child).width();
    if (width < currentWidth) {
      width = currentWidth;
    }
  })  
  return width;
}

function maxHeight(children) {
  let height = 0;
  children.map((_, _child) => {
    const currentHeight = $(_child).height();
    if (height < currentHeight) {
      height = currentHeight;
    }  
  })  
  return height;
}

function hasWidth(className) {
  return (
    className.includes("w-") ||
    className.includes("mnw-")
  )
}

function hasHeight(className) {
  return (
    className.includes("h-") ||
    className.includes("mnh-")
  )
}

function setBoxSize(boxes) {
  boxes.map((_, _box) => {
    const box = $(_box);
    const className = box.attr("class");
    if(!hasWidth(className)) {
      box.css("width", maxWidth(box.children()));
    }
    if (!hasHeight(className)) {
      box.css("height", maxHeight(box.children()));
    }
  });  
}

function isHex(number) {
  const regex = /^([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
  return regex.test(number);
}

function insertDot(number) {
  const result = + (number[0] + "." + number.slice(1));
  return (result > 1 ? 1 : result < 0 ? 0 : result) || 0;
}

function isColor(short) {
  switch(short) {
    case "bc-":
    case "blc-":
    case "brc-":
    case "blc-":
    case "btc-":
    case "bbc-":
    case "bgc-":
    case "c-": return true;
    default: return false;
  }
}

function isFloat(short) {
  switch(short) {
    case "o-": return true;
    default: return false;
  }
}

function validValue(short, value, dimen) {
  let result;
  if (isColor(short)) {
    if(isHex(value)) {
      result = dimen + value;
    } else {
      result = value
    }
  } else if (isFloat(short)) {
    result = insertDot(value);
  } else {
    result = + value || value;
    if (typeof(result) === "number") {
      result = result + dimen;
    }
    if(short === "bfb-") {
      result = `blur(${result})`;
    }
  }
  return result;
}

function getClassValue(classes, short) {
  const slices = classes.split(short);
  const lastIndex = slices.length - 1;
  if (slices.length > 1) {
    return extractValue(slices[lastIndex]);
  } else {
    return null;
  }
}

function applyCss(styles, short, nameDimen) {
  $(`[class*='${short}']`).map((_, _e) => {
    const e = $(_e);
    const value = getClassValue(` ${e.attr("class")} `, ` ${short}`);
    if (value) {
      const style = combine(
        "." + short + value,
        { [nameDimen[0]]: validValue(short, value.trim(), nameDimen[1]) }
      );
      if (!styles.includes(style)) {
        styles.push(style);
      }
    }
  });
}

function applyAllCss() {
  const styles = [];
  for (const short in classPairsCss) {
    applyCss(
      styles,
      short,
      classPairsCss[short]
    );
  }
  const newStyle = arrayToString(styles);
  if (oldStyles() != newStyle) {
    styleTag().innerHTML = newStyle;
  }
}

function styleTag() {
  let style = $("head style[id='init']");
  if (style.length == 0) {
    $("head").append("<style type='text/css' id='init'></style>");
    style = $("head style[id='init']");
  }
  return style[0];
}

function oldStyles() {
  return styleTag().innerHTML;
}

function arrayToString(array) {
  let result = "";
  for (value of array) {
    result += value;
  }
  return result;
}

function objectToString(pairs) {
  let result = "{";
  for (key in pairs) {
    result += `${key}: ${pairs[key]};`
  }
  return result + "}";
}

function combine(selector, pairs) {
  return selector + objectToString(pairs);
}

function initializer() {
  setRootHeight();
  setBoxSize($(".box"));
  applyAllCss();
  setTimeout(initializer, 0);
}

initializer();