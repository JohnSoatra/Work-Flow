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

  //text-decorator-color
  "tdc-": ["text-decoration-color", "#"],

  // font-size
  "fs-": ["font-size", "px"],

  // flex
  "f-": ["flex", ""],

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

const pairSize = {
  //font-size
  "xs-fs-": ["font-size", "px"],
  "sm-fs-": ["font-size", "px"],
  "md-fs-": ["font-size", "px"],
  "lg-fs-": ["font-size", "px"],
  "xl-fs-": ["font-size", "px"],

  // size
  "xs-w-": ["width", "px"],
  "sm-w-": ["width", "px"],
  "md-w-": ["width", "px"],
  "lg-w-": ["width", "px"],
  "xl-w-": ["width", "px"],
  
  "xs-h-": ["height", "px"],
  "sm-h-": ["height", "px"],
  "md-h-": ["height", "px"],
  "lg-h-": ["height", "px"],
  "xl-h-": ["height", "px"],

  // padding
  "xs-p-": ["padding", "px"],
  "xs-pl-": ["padding-left", "px"],
  "xs-pr-": ["padding-right", "px"],
  "xs-pt-": ["padding-top", "px"],
  "xs-pb-": ["padding-bottom", "px"],

  "sm-p-": ["padding", "px"],
  "sm-pl-": ["padding-left", "px"],
  "sm-pr-": ["padding-right", "px"],
  "sm-pt-": ["padding-top", "px"],
  "sm-pb-": ["padding-bottom", "px"],

  "md-p-": ["padding", "px"],
  "md-pl-": ["padding-left", "px"],
  "md-pr-": ["padding-right", "px"],
  "md-pt-": ["padding-top", "px"],
  "md-pb-": ["padding-bottom", "px"],

  "lg-p-": ["padding", "px"],
  "lg-pl-": ["padding-left", "px"],
  "lg-pr-": ["padding-right", "px"],
  "lg-pt-": ["padding-top", "px"],
  "lg-pb-": ["padding-bottom", "px"],
  
  "xl-p-": ["padding", "px"],
  "xl-pl-": ["padding-left", "px"],
  "xl-pr-": ["padding-right", "px"],
  "xl-pt-": ["padding-top", "px"],
  "xl-pb-": ["padding-bottom", "px"],
  
  // margin
  "xs-m-": ["margin", "px"],
  "xs-ml-": ["margin-left", "px"],
  "xs-mr-": ["margin-right", "px"],
  "xs-mt-": ["margin-top", "px"],
  "xs-mb-": ["margin-bottom", "px"],

  "sm-m-": ["margin", "px"],
  "sm-ml-": ["margin-left", "px"],
  "sm-mr-": ["margin-right", "px"],
  "sm-mt-": ["margin-top", "px"],
  "sm-mb-": ["margin-bottom", "px"],
  
  "md-m-": ["margin", "px"],
  "md-ml-": ["margin-left", "px"],
  "md-mr-": ["margin-right", "px"],
  "md-mt-": ["margin-top", "px"],
  "md-mb-": ["margin-bottom", "px"],
  
  "lg-m-": ["margin", "px"],
  "lg-ml-": ["margin-left", "px"],
  "lg-mr-": ["margin-right", "px"],
  "lg-mt-": ["margin-top", "px"],
  "lg-mb-": ["margin-bottom", "px"],
  
  "xl-m-": ["margin", "px"],
  "xl-ml-": ["margin-left", "px"],
  "xl-mr-": ["margin-right", "px"],
  "xl-mt-": ["margin-top", "px"],
  "xl-mb-": ["margin-bottom", "px"],

  // min-width, min-height
  "xs-mnw-": ["min-width", "px"],
  "xs-mnh-": ["min-height", "px"],

  "sm-mnw-": ["min-width", "px"],
  "sm-mnh-": ["min-height", "px"],

  "md-mnw-": ["min-width", "px"],
  "md-mnh-": ["min-height", "px"],

  "lg-mnw-": ["min-width", "px"],
  "lg-mnh-": ["min-height", "px"],

  "xl-mnw-": ["min-width", "px"],
  "xl-mnh-": ["min-height", "px"],

  // max-width, max-height
  "xs-mxw-": ["max-width", "px"],
  "xs-mxh-": ["max-height", "px"],

  "sm-mxw-": ["max-width", "px"],
  "sm-mxh-": ["max-height", "px"],
  
  "md-mxw-": ["max-width", "px"],
  "md-mxh-": ["max-height", "px"],
  
  "lg-mxw-": ["max-width", "px"],
  "lg-mxh-": ["max-height", "px"],
  
  "xl-mxw-": ["max-width", "px"],
  "xl-mxh-": ["max-height", "px"],
}

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
  const windowHeight = window.innerHeight
  $(".root").css("minHeight", windowHeight);
}

function isHex(number) {
  const regex = /^([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
  return regex.test(number);
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
    case "tdc-":
    case "c-": return true;
    default: return false;
  }
}

function checkPercentage(string) {
  let result = string;
  if (string.endsWith("p")) {
      result = string.slice(0, string.length - 1) + "%";
  }
  return result;
}

function validValue(short, value, dimen) {
  let result;
  if (isColor(short)) {
    if(isHex(value)) {
      result = dimen + value;
    } else {
      result = value
    }
  } else {
    value = checkPercentage(value);
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
  if (JSON.stringify(oldStyles("modifier")) != JSON.stringify(newStyle)) {
    styleTag("modifier").innerHTML = newStyle;
  }
}

function styleTag(id) {
  let style = $(`head style[id='${id}']`);
  if (style.length == 0) {
    $("head").append(`<style type='text/css' id='${id}'></style>`);
    style = $(`head style[id='${id}']`);
  }
  return style[0];
}

function oldStyles(id) {
  return styleTag(id).innerHTML;
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

function getSize() {
  let size = ["xs"];
  const width = window.innerWidth;
  if (width > 1200) size.push("xl");
  if (width > 992) size.push("lg");
  if (width > 768) size.push("md");
  if (width > 576) size.push("sm");
  return size;
}

function applyCssResponser(styles, short, nameDimen) {
  if (getSize().includes(short.split("-")[0])) {
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
}

function applyAllCssResponser() {
  const styles = [];
  for (const short in pairSize) {
    applyCssResponser(
      styles,
      short,
      pairSize[short]
    );
  }
  const newStyle = arrayToString(styles);
  if (JSON.stringify(oldStyles("responser")) != JSON.stringify(newStyle)) {
    styleTag("responser").innerHTML = newStyle;
  }
}

function initializer() {
  setRootHeight();
  applyAllCss();
  applyAllCssResponser();
  setTimeout(initializer, 0);
}
initializer();
