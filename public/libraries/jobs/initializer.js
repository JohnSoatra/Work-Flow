import {
    classPairsCss,
    classPairsDataTitle,
    pairSize,
    pairSizeDown,
    excludePairs
} from "./values.js";
import {
    arrayToString,
    combine,
    getClassValue,
    getSize,
    getSizeDown,
    validateValue,
    popupDataTitle
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
    const root = document.querySelector(".root");
    if (root) {
        root.style.minHeight = windowHeight + "px";
    }
}
  
function applyCssAll(styles, short, nameDimen) {
    document.querySelectorAll(`[class*='${short}']`).forEach(e => {
        const value = getClassValue(` ${e.getAttribute('class')} `, ` ${short}`);
        if (value && !excludePairs.includes(short + value)) {
            const validatedValue = validateValue(short, value.trim(), nameDimen[1]);
            const style = combine(
                "." + short + value,
                { [nameDimen[0]]: validatedValue }
            );
            if (!styles.includes(style)) {
                styles.push(style);
            }
        }
    });
}

function oldStyles(id) {
    return styleTag(id).innerHTML;
}

function styleTag(id) {
    let style = document.querySelector(`head style[id='${id}']`);
    if (!style) {
        const child = document.createElement("style");
        child.id = id;
        child.setAttribute("type", "text/css");
        document.querySelector("head").appendChild(child);
        style = document.querySelector(`head style[id='${id}']`);
    }
    return style;
}  
 
function applyAllCss() {
    const styles = [];
    for (const short in classPairsCss) {
        applyCssAll(styles, short, classPairsCss[short]);
    }
    const newStyle = arrayToString(styles);
    if (oldStyles("modifier") !== newStyle) {
        styleTag("modifier").innerHTML = newStyle;
    }
}

function applyCssResponser(styles, short, nameDimen) {
    if (getSize().includes(short.split("-")[0])) {
        document.querySelectorAll(`[class*='${short}']`).forEach(e => {
            const value = getClassValue(` ${e.getAttribute('class')} `, ` ${short}`);
            if (value && !excludePairs.includes(short + value)) {
                const validatedValue = validateValue(short, value.trim(), nameDimen[1]);
                const style = combine(
                    "." + short + value,
                    { [nameDimen[0]]:  validatedValue }
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
        document.querySelectorAll(`[class*='${short}']`).forEach(e => {
            const value = getClassValue(` ${e.getAttribute('class')} `, ` ${short}`);
            if (value && !excludePairs.includes(short + value)) {
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
    document.querySelectorAll(`[id*='popup-data-title-'][title-class*='${short}']`).forEach(e => {
        const value = getClassValue(` ${e.getAttribute("title-class")} `, ` ${short}`);
        if (value && !excludePairs.includes(short + value)) {
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
    const titleCount = document.querySelectorAll("[data-title]").length;
    const positionCount = document.querySelectorAll("[title-position]").length;
    let titles = [];
    let positions = [];
    document.querySelectorAll("[data-title]").forEach(e => {
        titles.push(e.getAttribute("title-position"));
    });
    document.querySelectorAll("[title-position]").forEach(e => {
        positions.push(e.getAttribute("title-position"));
    });

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
        document.querySelectorAll("[data-title]").forEach((e, i) => {
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
                        title.setAttribute("title-class", popupDataTitle(classes));
                        title.style.opacity = 0;

                        document.querySelectorAll("span[id*='data-title']").forEach(e => {
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
                        title.addEventListener("transitionend", function() {
                            document.querySelectorAll(`span[id='${id}']`).forEach(e => {
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
                        title.addEventListener("transitionend", function() {
                            document.querySelectorAll(`span[id='${id}']`).forEach(e => {
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
