import $ from "./jquery/jquery.js";
import {
    classPairsCss,
    classPairsDataTitle,
    pairSize,
    pairSizeDown
} from "./values.js";
import {
    arrayToString,
    combine,
    getClassValue,
    getSize,
    getSizeDown,
    validateValue
} from "./helpers.js";

let dataTitleCount = 0;
let titlePositionCount = 0;
let dataTitleArray = [];
let positionArray = [];

function initializer() {
    setRootHeight();
    initializeDataTitle();
    applyAllCss();
    applyAllCssResponser();
    applyAllCssDataTitle();
    setTimeout(initializer, 25);
}  
initializer();

function setRootHeight() {
    const windowHeight = window.innerHeight;
    $(".root").css("minHeight", windowHeight);
}
  
function applyCss(styles, short, nameDimen) {
    $(`[class*='${short}']`).map((_, _e) => {
        const e = $(_e);
        const value = getClassValue(` ${e.attr("class")} `, ` ${short}`);
        if (value) {
            const style = combine(
                "." + short + value,
                { [nameDimen[0]]: validateValue(short, value.trim(), nameDimen[1]) }
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
        applyCss(styles, short, classPairsCss[short]);
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
  
function applyCssResponser(styles, short, nameDimen) {
    if (getSize().includes(short.split("-")[0])) {
        $(`[class*='${short}']`).map((_, _e) => {
            const e = $(_e);
            const value = getClassValue(` ${e.attr("class")} `, ` ${short}`);
            if (value) {
                const style = combine(
                    "." + short + value,
                    { [nameDimen[0]]: validateValue(short, value.trim(), nameDimen[1]) }
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
                    { [nameDimen[0]]: validateValue(short, value.trim(), nameDimen[1]) }
                );
                if (!styles.includes(style)) {
                    styles.push(style);
                }
            }
        });
    }
}
  
function applyCssDataTitle(styles, short, nameDimen) {
    $(`[id*='popup-data-title-'][title-class*='${short}']`).map((_, _e) => {
        const e = $(_e);
        const value = getClassValue(` ${e.attr("title-class")} `, ` ${short}`);
        if (value) {
            const style = combine(
                `[id*='popup-data-title-'][title-class~='${short}${value}']`,
                { [nameDimen[0]]: validateValue(short, value.trim(), nameDimen[1]) }
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
  
function initializeDataTitle() {
    const titleCount = $("[data-title]").length;
    const positionCount = $("[title-position]").length;
    const titles = $("[data-title]").map((i, e) => e.getAttribute("title-position"));
    const positions = $("[title-position]").map((i, e) => e.getAttribute("title-position"));
    if (!(
        titleCount === dataTitleCount &&
        positionCount === titlePositionCount &&
        titles.toString() === dataTitleArray.toString() &&
        positions.toString() === positionArray.toString()
    )) {
        dataTitleCount = titleCount;
        titlePositionCount = positionCount;
        dataTitleArray = titles;
        positionArray = positions;
        $("[data-title]").each((i, e) => {
            const id = "popup-data-title-" + i;
            e.addEventListener("pointerenter", function(evt) {
                if (evt.pointerType === "mouse") {
                    const data_title = e.getAttribute("data-title");
                    if (data_title) {
                        const rect = e.getBoundingClientRect();
                        const classes = e.getAttribute("class");
                        const title = document.createElement("span");
                        const position = e.getAttribute("title-position");
                        const positions = position ? position.split(" ") : ["bb", "lc"];
                        let top = rect.y;
                        let left = rect.x;
                        
                        title.id = id;
                        title.innerHTML = data_title;
                        title.setAttribute("title-class", classes);
                        title.style.opacity = 0;

                        $("span[id*='data-title']").each((i, e) => {
                            document.body.removeChild(e);
                        });
                        document.body.appendChild(title);
                        
                        if (positions.includes("tt")) {
                            top -= title.clientHeight;
                        } else if (positions.includes("tb")) {
                            top += rect.height - title.clientHeight;
                        } else if (positions.includes("tc")) {
                            top += (rect.height - title.clientHeight) / 2;
                        } else if (positions.includes("bb")) {
                            top += rect.height;
                        } else if (positions.includes("bt")) {
                            top = rect.y;
                        } else if (positions.includes("bc")) {
                            top += (rect.height - title.clientHeight) / 2;
                        }
                
                        if (positions.includes("ll")) {
                            left -= title.clientWidth;
                        } else if (positions.includes("lr")) {
                            left += rect.width - title.clientWidth;
                        } else if (positions.includes("lc")) {
                            left += (rect.width - title.clientWidth) / 2;
                        } else if (positions.includes("rr")) {
                            left += rect.width;
                        } else if (positions.includes("rl")) {
                            left = rect.x;
                        } else if (positions.includes("rc")) {
                            left += (rect.width - title.clientWidth) / 2;
                        }  
                        
                        title.style.top += top + "px";
                        title.style.left += left + "px";
                        title.style.opacity = 1;
                    }
                }
            });
            e.addEventListener("pointerleave", function(evt) {
                if (evt.pointerType === "mouse") {
                    const title = document.getElementById(id);
                    if (title) {
                        title.addEventListener("transitionend", function(evt) {
                            $(`span[id='${id}']`).each((i, e) => {
                                document.body.removeChild(e);
                            });
                        });
                        title.style.opacity = 0;
                    }
                }
            });
            e.addEventListener("pointerdown", function(evt) {
                if (evt.pointerType === "mouse") {
                    const title = document.getElementById(id);
                    if (title) {
                        title.addEventListener("transitionend", function(evt) {
                            $(`span[id='${id}']`).each((i, e) => {
                                document.body.removeChild(e);
                            });
                        });
                        title.style.opacity = 0;
                    }
                }
            });
        });
    }
}
