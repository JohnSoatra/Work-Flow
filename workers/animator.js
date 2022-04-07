import {
    nameBox,
    a_n,
    a_bl,
    a_bb,
    a_br,
    a_bt,
    d_e,
    d_k,
    desc,
    btn_lang
} from "./elements.js";
import {
    changeBtnLang,
    changeAnim,
    removeClasses,
    removeAnimateListener,
    flasher,
    changeDescHeight,
} from "./funs.js";
let animating = false;

function animatorDesc() {
    if (!animating) {
        animating = true;
        if (btn_lang.classList.contains("btn-lang-kh")) {
            d_k.classList.add("pos-a", "t-0", "l-0");
            d_k.classList.remove("d-n");
            changeAnim(d_e, "an-fi", "an-fo");
            changeAnim(d_k, "an-fo", "an-fi");
            changeDescHeight(
                d_e.clientHeight + "px",
                d_k.clientHeight + "px"
            );
            d_k.onanimationend = () => {
                d_k.onanimationend = null;
                d_k.classList.remove("pos-a", "t-0", "l-0");
                d_e.classList.add("d-n");
                desc.style.height = null;
                changeBtnLang();
                localStorage.setItem("lang", "kh");
                animating = false;
            }
        } else {
            d_e.classList.add("pos-a", "t-0", "l-0");
            d_e.classList.remove("d-n");
            changeAnim(d_k, "an-fi", "an-fo");
            changeAnim(d_e, "an-fo", "an-fi");
            changeDescHeight(
                d_k.clientHeight + "px",
                d_e.clientHeight + "px"
            );
            d_e.onanimationend = () => {
                d_e.onanimationend = null;
                d_e.classList.remove("pos-a", "t-0", "l-0");
                d_k.classList.add("d-n");
                changeBtnLang();
                localStorage.setItem("lang", "en");
                desc.style.height = null;
                animating = false;
            }
        }
    }
}

function animatorName() {
    removeAnimateListener(
        a_n,
        a_bl,
        a_bb,
        a_br,
        a_bt,
        a_bl.parentElement,
        a_bb.parentElement,
        a_br.parentElement,
        a_bt.parentElement
    );
    if (a_bl.classList.contains("an-sft")) {
        changeAnim(a_bt, "an-sfr", "an-str");
        a_bt.onanimationend = () => {
            changeAnim(a_br, "an-sfb", "an-stb");
            a_br.onanimationend = () => {
                changeAnim(a_bb, "an-sfl", "an-stl");
                a_bb.onanimationend = () => {
                    setTimeout(() => {
                        a_n.classList.add("atf-ei");
                        changeAnim(a_n, "an-sfl", "an-stl");
                        a_n.onanimationend = () => {
                            a_n.classList.add("v-h");
                            changeAnim(a_bl, "an-sft", "an-stt");
                            a_bl.onanimationend = () => {
                                nameBox.classList.add("v-h");
                                setTimeout(animatorName, 1600);
                            }
                        }
                    }, 6000);
                }
            }
        }
    } else {
        changeAnim(a_bl, "an-stt", "an-sft");
        nameBox.classList.remove("v-h");
        a_bl.onanimationend = () => {
            removeClasses(a_n, "atf-ei", "v-h");
            changeAnim(a_n, "an-stl", "an-sfl");
            a_n.onanimationend = () => {
                setTimeout(() => {
                    changeAnim(a_bb, "an-stl", "an-sfl");
                    a_bb.onanimationend = () => {
                        changeAnim(a_br, "an-stb", "an-sfb");
                        a_br.onanimationend = () => {
                            changeAnim(a_bt, "an-str", "an-sfr");
                            a_bt.onanimationend = () => {
                                setTimeout(() => {
                                    flasher(a_bl.parentElement, 6);
                                    flasher(a_bb.parentElement, 6);
                                    flasher(a_br.parentElement, 6);
                                    flasher(a_bt.parentElement, 6, () => {
                                        setTimeout(animatorName, 5000);
                                    });
                                }, 3500);
                            }
                        }
                    }
                }, 6000);
            }
        }
    }
}

export default {
    animatorName,
    animatorDesc
};
export {
    animatorName,
    animatorDesc
}
