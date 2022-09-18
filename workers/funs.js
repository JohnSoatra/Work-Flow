import { 
    desc,
    d_e,
    d_k,
    btn_lang,
    footer_en,
    footer_kh,
} from "./elements.js";

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
    if (localStorage.getItem("lang") === "en") {
        btn_lang.classList.add("btn-lang-kh", "dt-ff-kh", "kh");
        btn_lang.setAttribute("data-title", "ការពិពណ៌នាជាភាសារខ្មែរ!");
        btn_lang.innerHTML = "ខ្មែរ";
        d_e.classList.remove("d-n");
        footer_en.classList.remove("d-n");
    } else {
        d_k.classList.remove("d-n");
        footer_kh.classList.remove("d-n");
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
export default {
    checkLang,
    changeBtnLang,
    toggleAnim,
    changeAnim,
    removeClasses,
    removeAnimateListener,
    flasher,
    changeDescHeight
}
export {
    checkLang,
    changeBtnLang,
    toggleAnim,
    changeAnim,
    removeClasses,
    removeAnimateListener,
    flasher,
    changeDescHeight
}
