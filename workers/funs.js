import { BalloonDown, BalloonFromDown, BalloonFromUp, BalloonUp, BigBallonClasses } from "./constants.js";
import { 
    desc,
    d_e,
    d_k,
    btn_lang,
    root,
} from "./elements.js";
import Balloon from "./models.js";
let ranImgSrc = null;
let ranImgPos = null;

function changeDescHeight(oldHeight, newHeight) {
    desc.style.height = oldHeight;
    desc.style.height = newHeight;
}

function changeBtnLang() {
    if (btn_lang.classList.contains("btn-lang-kh")) {
        btn_lang.classList.remove("btn-lang-kh", "dt-ff-kh", "kh");
        btn_lang.setAttribute("data-title", "Description in English!");
        btn_lang.innerHTML = "En";
    } else {
        btn_lang.classList.add("btn-lang-kh", "dt-ff-kh", "kh");
        btn_lang.setAttribute("data-title", "ការពិពណ៌នាជាភាសារខ្មែរ!");
        btn_lang.innerHTML = "ខ្មែរ";
    }
}

function checkLang() {
    if (localStorage.getItem("lang") === "kh") {
        d_k.classList.remove("d-n");
    } else {
        btn_lang.classList.add("btn-lang-kh", "dt-ff-kh", "kh");
        btn_lang.setAttribute("data-title", "ការពិពណ៌នាជាភាសារខ្មែរ!");
        btn_lang.innerHTML = "ខ្មែរ";
        d_e.classList.remove("d-n");
    }
    btn_lang.classList.remove("d-n");
}

function toggleAnim(element, from, to) {
    if (element.classList.contains(from)) {
        element.classList.remove(from);
        element.classList.add(to);
    } else {
        element.classList.remove(to);
        element.classList.add(from);
    }
}

function changeAnim(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
}

function removeClasses(element, ...anims) {
    element.classList.remove(...anims);
}

function removeAnimateListener(...elements) {
    for (let element of elements) {
        element.onanimationend = null;
    }
}

function flasher(element, time, callback = null, starter = 0) {
    if (starter < time) {
        toggleAnim(element, "an-ltu", "an-lfu");
        element.onanimationend = () => {
            flasher(element, time, callback, starter + 1);
        }
    } else {
        if (element.classList.contains("an-ltu")) {
            element.classList.add("an-lfu");
            element.onanimationend = () => {
                removeClasses(element, "an-lfu");
                if (callback) callback();
            }
        } else {
            removeClasses(element, "an-lfu");
            if (callback) callback();
        }
    }
}
// new year {
function createObject(style) {
    const obj = {};
    let content =  style.slice(1, style.length -1);
    if (content.includes("{")) {
        do {
            const name = content.slice(0, content.indexOf("{"));
            const start = content.indexOf("{");
            const end = content.indexOf("}");
            const newContent = content.slice(start, end + 1);
            obj[name.trim()] = createObject(newContent);
            content = content.slice(end + 1);
        } while (content.includes("{"));
    } else {
        const slices = content.split(";");
        for (let slice of slices) {
            if (slice.length) {
                const prop = slice.split(":");
                obj[prop[0].trim()] = +prop[1] || prop[1].trim();
            }
        }
    }
    return obj;
}
function createStyle(object) {
    let result = "{";
    for (let key in object) {
        const value = object[key];
        if (typeof(value) === "object") {
            const newValue = createStyle(value);
            result += key + newValue;
        } else {
            result += `${key}:${value};`;
        }
    }
    return result + "}";
}
function createKeyframeObject(string) {
    const frames = string.split("@keyframes ").slice(1);
    const newFrames = {};
    for (let frame of frames) {
        const name = frame.slice(0, frame.indexOf("{"));
        const content = frame.slice(frame.indexOf("{"));
        newFrames[name] = createObject(content);
    }
    return newFrames;
}
function createKeyframeStyle(object) {
    let string = "";
    for (let name in object) {
        string += `@keyframes ${name}` + createStyle(object[name]);
    }
    return string;
}
function addKeyframe(name, props) {
    let style = document.querySelector("style[id='keyframe']");
    if (!style) {
        style = document.createElement("style");
        style.id = "keyframe";
        document.querySelector("head").appendChild(style);
    }
    const frames = createKeyframeObject(style.innerHTML);
    frames[name] = props;
    style.innerHTML = createKeyframeStyle(frames);
    return name;
}
function deleteKeyframe(name) {
    let style = document.querySelector("style[id='keyframe']");
    if (!style) {
        style = document.createElement("style");
        style.id = "keyframe";
        document.querySelector("head").appendChild(style);
    }
    const frames = createKeyframeObject(style.innerHTML);
    delete frames[name];
    style.innerHTML = createKeyframeStyle(frames);
    return name;
}

function createBalloonElement(balloon, onLoad) {
    const old = document.getElementById("img-bw");
    const div = document.createElement("div");
    const img = document.createElement("img");
    
    if (old) root.removeChild(old);
    div.id = "img-bw";
    div.className = "img-bw container to-bc anim flex v-h " + balloon.divClass;
    img.id = "img-b";
    img.className = "img-b anim xs-w-95 sm-w-100 md-w-110 lg-w-115 " + balloon.imgClass;
    img.src = balloon.imgSrc;
    img.alt = "balloons";
    div.appendChild(img);
    root.appendChild(div);
    img.onload = () => onLoad(div);
}

function random(length) {
    return Math.floor(Math.random() * length);
}
function randomBalloon() {
    const divClasses = ["", "jc-c", "jc-e"];
    const imgClasses = [
        "xs-pr-160 sm-pr-180 md-pr-190 lg-pr-210",
        "xs-pl-160 sm-pl-180 md-pl-190 lg-pl-210",
    ];
    const srcs = [
        "./images/newyear/balloon-blue.png",
        "./images/newyear/balloon-pink.png",
        "./images/newyear/balloon-purple.png",
        "./images/newyear/balloon-red.png",
        "./images/newyear/balloons.png",
    ];
    let ranImg = random(5);
    let ranDiv = random(3);
    while (ranImg === ranImgSrc) { ranImg = random(5); }
    while (ranDiv === ranImgPos) { ranDiv = random(3); }
    const divClass = divClasses[ranDiv] + (ranDiv === 1 ? " " + imgClasses[random(2)] : "");
    const imgClass =  ranImg === 4 ? BigBallonClasses : "";
    const imgSrc = srcs[ranImg];
    ranImgSrc = ranImg;
    ranImgPos = ranDiv;
    return new Balloon(divClass, imgClass, imgSrc);
}
function rotateBalloon(balloon, starter = 0) {
    let i = starter;
    const keys = [
        BalloonUp,
        BalloonFromUp,
        BalloonDown,
        BalloonFromDown
    ];
    balloon.classList.remove("atf-ei");
    balloon.style.animationName = keys[i];
    balloon.onanimationend = (evt) => {
        evt.stopPropagation();
        i ++;
        if (i >= keys.length) i = 0;
        if (keys[i] === BalloonDown || keys[i] === BalloonUp) {
            balloon.classList.remove("atf-ei");
        } else {
            balloon.classList.add("atf-ei");
        }
        balloon.style.animationName = keys[i];
    }
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
// new year }
export default {
    checkLang,
    changeBtnLang,
    toggleAnim,
    changeAnim,
    removeClasses,
    removeAnimateListener,
    flasher,
    changeDescHeight,
    // new-year {
    addKeyframe,
    deleteKeyframe,
    createBalloonElement,
    randomBalloon,
    rotateBalloon,
    getSize,
    // new-year }
}
export {
    checkLang,
    changeBtnLang,
    toggleAnim,
    changeAnim,
    removeClasses,
    removeAnimateListener,
    flasher,
    changeDescHeight,
    // new-year {
    addKeyframe,
    deleteKeyframe,
    createBalloonElement,
    randomBalloon,
    rotateBalloon,
    getSize,
    // new-year }
}
