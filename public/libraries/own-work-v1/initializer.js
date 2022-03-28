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
  // flex
  "fi-": ["fill", "#"],

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

const classPairsDataTitle = {
  // size
  "dta-w-": ["width", "px"],
  "dta-h-": ["height", "px"],

  // position
  "dta-t-": ["top", "px"],
  "dta-b-": ["bottom", "px"],
  "dta-l-": ["left", "px"],
  "dta-r-": ["right", "px"],
  
  // backdrop-filter
  "dta-bfb-": ["backdrop-filter", "px"],
  
  // border
  "dta-bw-": ["border-width", "px"],
  "dta-blw-": ["border-left-width", "px"],
  "dta-brw-": ["border-right-width", "px"],
  "dta-btw-": ["border-top-width", "px"],
  "dta-bbw-": ["border-bottom-width", "px"],
  
  // border radius
  "dta-br-": ["border-radius", "px"],
  "dta-btlr-": ["border-top-left-radius", "px"],
  "dta-btrr-": ["border-top-right-radius", "px"],
  "dta-bblr-": ["border-bottom-left-radius", "px"],
  "dta-bbrr-": ["border-bottom-right-radius", "px"],

  // border-color
  "dta-bc-": ["border-color", "#"],
  "dta-blc-": ["border-left-color", "#"],
  "dta-brc-": ["border-right-color", "#"],
  "dta-btc-": ["border-top-color", "#"],
  "dta-bbc-": ["border-bottom-color", "#"],

  // background-color
  "dta-bgc-": ["background-color", "#"],

  // color
  "dta-c-": ["color", "#"],

  //text-decorator-color
  "dta-tdc-": ["text-decoration-color", "#"],

  // font-size
  "dta-fs-": ["font-size", "px"],

  // flex
  "dta-f-": ["flex", ""],
  // flex
  "dta-fi-": ["fill", "#"],

  // opacity
  "dta-o-": ["opacity", "."],
  
  // padding
  "dta-p-": ["padding", "px"],
  "dta-pl-": ["padding-left", "px"],
  "dta-pr-": ["padding-right", "px"],
  "dta-pt-": ["padding-top", "px"],
  "dta-pb-": ["padding-bottom", "px"],
  
  // margin
  "dta-m-": ["margin", "px"],
  "dta-ml-": ["margin-left", "px"],
  "dta-mr-": ["margin-right", "px"],
  "dta-mt-": ["margin-top", "px"],
  "dta-mb-": ["margin-bottom", "px"],

  // min-width, min-height
  "dta-mnw-": ["min-width", "px"],
  "dta-mnh-": ["min-height", "px"],

  // max-width, max-height
  "dta-mxw-": ["max-width", "px"],
  "dta-mxh-": ["max-height", "px"],

  // z-index
  "dta-z-": ["z-index", ""]
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

const pairSizeDown = {
  //font-size
  "d-xs-fs-": ["font-size", "px"],
  "d-sm-fs-": ["font-size", "px"],
  "d-md-fs-": ["font-size", "px"],
  "d-lg-fs-": ["font-size", "px"],
  "d-xl-fs-": ["font-size", "px"],

  // size
  "d-xs-w-": ["width", "px"],
  "d-sm-w-": ["width", "px"],
  "d-md-w-": ["width", "px"],
  "d-lg-w-": ["width", "px"],
  "d-xl-w-": ["width", "px"],
  
  "d-xs-h-": ["height", "px"],
  "d-sm-h-": ["height", "px"],
  "d-md-h-": ["height", "px"],
  "d-lg-h-": ["height", "px"],
  "d-xl-h-": ["height", "px"],

  // padding
  "d-xs-p-": ["padding", "px"],
  "d-xs-pl-": ["padding-left", "px"],
  "d-xs-pr-": ["padding-right", "px"],
  "d-xs-pt-": ["padding-top", "px"],
  "d-xs-pb-": ["padding-bottom", "px"],

  "d-sm-p-": ["padding", "px"],
  "d-sm-pl-": ["padding-left", "px"],
  "d-sm-pr-": ["padding-right", "px"],
  "d-sm-pt-": ["padding-top", "px"],
  "d-sm-pb-": ["padding-bottom", "px"],

  "d-md-p-": ["padding", "px"],
  "d-md-pl-": ["padding-left", "px"],
  "d-md-pr-": ["padding-right", "px"],
  "d-md-pt-": ["padding-top", "px"],
  "d-md-pb-": ["padding-bottom", "px"],

  "d-lg-p-": ["padding", "px"],
  "d-lg-pl-": ["padding-left", "px"],
  "d-lg-pr-": ["padding-right", "px"],
  "d-lg-pt-": ["padding-top", "px"],
  "d-lg-pb-": ["padding-bottom", "px"],
  
  "d-xl-p-": ["padding", "px"],
  "d-xl-pl-": ["padding-left", "px"],
  "d-xl-pr-": ["padding-right", "px"],
  "d-xl-pt-": ["padding-top", "px"],
  "d-xl-pb-": ["padding-bottom", "px"],
  
  // margin
  "d-xs-m-": ["margin", "px"],
  "d-xs-ml-": ["margin-left", "px"],
  "d-xs-mr-": ["margin-right", "px"],
  "d-xs-mt-": ["margin-top", "px"],
  "d-xs-mb-": ["margin-bottom", "px"],

  "d-sm-m-": ["margin", "px"],
  "d-sm-ml-": ["margin-left", "px"],
  "d-sm-mr-": ["margin-right", "px"],
  "d-sm-mt-": ["margin-top", "px"],
  "d-sm-mb-": ["margin-bottom", "px"],
  
  "d-md-m-": ["margin", "px"],
  "d-md-ml-": ["margin-left", "px"],
  "d-md-mr-": ["margin-right", "px"],
  "d-md-mt-": ["margin-top", "px"],
  "d-md-mb-": ["margin-bottom", "px"],
  
  "d-lg-m-": ["margin", "px"],
  "d-lg-ml-": ["margin-left", "px"],
  "d-lg-mr-": ["margin-right", "px"],
  "d-lg-mt-": ["margin-top", "px"],
  "d-lg-mb-": ["margin-bottom", "px"],
  
  "d-xl-m-": ["margin", "px"],
  "d-xl-ml-": ["margin-left", "px"],
  "d-xl-mr-": ["margin-right", "px"],
  "d-xl-mt-": ["margin-top", "px"],
  "d-xl-mb-": ["margin-bottom", "px"],

  // min-width, min-height
  "d-xs-mnw-": ["min-width", "px"],
  "d-xs-mnh-": ["min-height", "px"],

  "d-sm-mnw-": ["min-width", "px"],
  "d-sm-mnh-": ["min-height", "px"],

  "d-md-mnw-": ["min-width", "px"],
  "d-md-mnh-": ["min-height", "px"],

  "d-lg-mnw-": ["min-width", "px"],
  "d-lg-mnh-": ["min-height", "px"],

  "d-xl-mnw-": ["min-width", "px"],
  "d-xl-mnh-": ["min-height", "px"],

  // max-width, max-height
  "d-xs-mxw-": ["max-width", "px"],
  "d-xs-mxh-": ["max-height", "px"],

  "d-sm-mxw-": ["max-width", "px"],
  "d-sm-mxh-": ["max-height", "px"],
  
  "d-md-mxw-": ["max-width", "px"],
  "d-md-mxh-": ["max-height", "px"],
  
  "d-lg-mxw-": ["max-width", "px"],
  "d-lg-mxh-": ["max-height", "px"],
  
  "d-xl-mxw-": ["max-width", "px"],
  "d-xl-mxh-": ["max-height", "px"],
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
    case "fi-":
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
  if (oldStyles("modifier") !== newStyle) {
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

function getSizeDown() {
  let size = [];
  const width = window.innerWidth;
  if (width > 1200) size.push("xl");
  if (width <= 1200) size.push("lg");
  if (width <= 992) size.push("md");
  if (width <= 768) size.push("sm")
  if (width <= 576) size.push("xs");
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

function applyCssResponserDown(styles, short, nameDimen) {
  if (getSizeDown().includes(short.split("-")[1])) {
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

function applyCssDataTitle(styles, short, nameDimen) {
  $(`[class*='${short}']`).map((_, _e) => {
    const e = $(_e);
    const value = getClassValue(` ${e.attr("class")} `, ` ${short}`);
    if (value) {
      const style = combine(
        "." + short + value + "[data-title]:after",
        { [nameDimen[0]]: validValue(short, value.trim(), nameDimen[1]) }
      );
      if (!styles.includes(style)) {
        styles.push(style);
      }
    }
  });
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
  for (const short in pairSizeDown) {
    applyCssResponserDown(
      styles,
      short,
      pairSizeDown[short]
    );
  }
  const newStyle = arrayToString(styles);
  if (oldStyles("responser") !== newStyle) {
    styleTag("responser").innerHTML = newStyle;
  }
}

function applyAllCssDataTitle() {
  const styles = [];
  for (const short in classPairsDataTitle) {
    applyCssDataTitle(
      styles,
      short,
      classPairsDataTitle[short]
    );
  }
  const newStyle = arrayToString(styles);
  if (oldStyles("data-title") !== newStyle) {
    styleTag("data-title").innerHTML = newStyle;
  }
}

let titleCount = 0;
function initializeDataTitle() {
  const count = $("[data-title]").length;
  if (titleCount !== count) {
    titleCount = count;
    $("[data-title]").each((i, e) => {
      const id = "popup-data-title-" + i;
      e.addEventListener("mouseenter", function(evt) {
          const data_title = e.getAttribute("data-title");
          if (data_title) {
            const rect = e.getBoundingClientRect();
            const title = document.createElement("span");
            const position = e.getAttribute("title-position");
            const positions = position ? position.split(" ") : ["bottom-bottom", "left-right"];
            let top = rect.y;
            let left = rect.x;
            
            title.id = id;
            title.innerHTML = data_title;
            title.style.opacity = 0;

            $("span[id*='data-title']").each((i, e) => {
              document.body.removeChild(e);
            });
            document.body.appendChild(title);
            
            if (positions.includes("top-top")) {
                top -= title.clientHeight;
            } else if (positions.includes("top-bottom")) {
                top += rect.height - title.clientHeight;
            } else if (positions.includes("top-center")) {
                top += (rect.height - title.clientHeight) / 2;
            } else if (positions.includes("bottom-bottom")) {
                top += rect.height;
            } else if (positions.includes("bottom-top")) {
                top = rect.y;
            } else if (positions.includes("bottom-center")) {
                top += (rect.height - title.clientHeight) / 2;
            }
    
            if (positions.includes("left-left")) {
                left -= title.clientWidth;
            } else if (positions.includes("left-right")) {
                left += rect.width - title.clientWidth;
            } else if (positions.includes("left-center")) {
                left += (rect.width - title.clientWidth) / 2;
            } else if (positions.includes("right-right")) {
                left += rect.width;
            } else if (positions.includes("right-left")) {
                left = rect.x;
            } else if (positions.includes("right-center")) {
                left += (rect.width - title.clientWidth) / 2;
            }  
            
            title.style.top += top + "px";
            title.style.left += left + "px";
            title.style.opacity = 1;
          }
      });
      e.addEventListener("mouseleave", function(evt) {
          const title = document.getElementById(id);
          if (title) {
            title.addEventListener("transitionend", function(evt) {
              $(`span[id='${id}']`).each((i, e) => {
                document.body.removeChild(e);
              });
            });
            title.style.opacity = 0;
          }
      });
      e.addEventListener("mousedown", function(evt) {
          const title = document.getElementById(id);
          if (title) {
            title.addEventListener("transitionend", function(evt) {
              $(`span[id='${id}']`).each((i, e) => {
                document.body.removeChild(e);
              });
            });
            title.style.opacity = 0;
          }
      });
    });
  }
}

//applyAllCssDataTitle();
function initializer() {
  setRootHeight();
  initializeDataTitle();
  applyAllCss();
  applyAllCssResponser();
  setTimeout(initializer, 50);
}
initializer();
