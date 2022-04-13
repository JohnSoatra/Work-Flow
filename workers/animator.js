import { BalloonUp, BalloonFromUp, BalloonDown, BalloonFromDown } from "./constants.js";
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
    btn_lang,
    t_n,
    t_h,
    t_he,
    t_y,
    t_ye,
    pp,
    pp_p,
} from "./elements.js";
import {
    changeBtnLang,
    changeAnim,
    removeClasses,
    removeAnimateListener,
    flasher,
    changeDescHeight,
    createBalloonElement,
    randomBalloon,
    deleteKeyframe,
    addKeyframe,
    rotateBalloon,
    getSize,
} from "./funs.js";
let animating = false;
let starter = 0;
let duration = 0;

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

// new-year {
function animatorTitle(lang) {
    const group = lang === "kh" ? [t_n, t_h, t_y] : [t_n, t_he, t_ye];
    changeAnim(group[0], "an-sft", "an-stb");
    changeAnim(group[1], "an-stb", "an-sft");
    group[1].onanimationend = () => {
        setTimeout(animatorPopper, 600);
        setTimeout(() => {
            group[1].onanimationend = null;
            changeAnim(group[1], "an-sft", "an-stb");
            changeAnim(group[2], "an-stb", "an-sft");
            group[2].onanimationend = () => {
                setTimeout(() => {
                    group[2].onanimationend = null;
                    changeAnim(group[2], "an-sft", "an-stb");
                    changeAnim(group[0], "an-stb", "an-sft");
                    group[0].onanimationend = () => {
                        setTimeout(() => {
                            group[0].onanimationend = null;
                            const newLang = lang === "kh" ? "en" : "kh";
                            animatorTitle(newLang);
                        }, 4000);
                    }
                }, 6500);
            }
        }, 6500);
    }
}
function startAnimateBalloon() {
    createBalloonElement(randomBalloon(), (div) => {
        const end = desc.offsetTop - div.clientHeight + 20;
        animatorBalloons(
            div,
            window.innerHeight + "px",
            (end >= 0 ? end : 0)+ "px"
        );
    });
    setTimeout(startAnimateBalloon, 17000);
}
function animatorBalloons(balloon, start, end, step = 0) {
    const anim = { "0%": { "top": start }, "100%": { "top": end } }
    const child = balloon.children[0];
    deleteKeyframe("balloons" + (step - 1));
    balloon.style.animationName = addKeyframe("balloons" + step, anim);
    if (step === 0) {
        balloon.onanimationstart = () => {
            balloon.onanimationstart = null;
            rotateBalloon(child);
            if (balloon.classList.contains("v-h")) {
                balloon.classList.remove("v-h");
            }
        }
        balloon.onanimationend = () => {
            const name = child.style.animationName;
            balloon.onanimationend = null;
            if (name === BalloonUp) {
                child.onanimationend = (evt) => {
                    evt.stopPropagation();
                    starter = 2;
                    child.classList.remove("atf-ei");
                    child.style.animationName = BalloonFromUp;
                    child.onanimationend = (evt) => {
                        evt.stopPropagation();
                        child.style.animationName = null;
                    }
                }
            } else if (name === BalloonDown) {
                child.onanimationend = (evt) => {
                    evt.stopPropagation();
                    starter = 0;
                    child.classList.remove("atf-ei");
                    child.style.animationName = BalloonFromDown;
                    child.onanimationend = (evt) => {
                        evt.stopPropagation();
                        child.style.animationName = null;
                    }
                }
            } else {
                starter = child.style.animationName === BalloonFromDown ? 2 : 0;
                const direction = child.style.animationName === BalloonFromDown ?
                    "rotate(5deg)" : "rotate(-5deg)";
                const anim1 = {
                    "0%": { "transform": "rotate(0deg)" },
                    "100%": { "transform": direction }
                }
                const anim2 = {
                    "0%": { "transform": direction },
                    "100%": { "transform": "rotate(0dg)" }
                }
                addKeyframe("balloonSlow1", anim1);
                addKeyframe("balloonSlow2", anim2);
                child.onanimationend = (evt) => {
                    evt.stopPropagation();
                    child.classList.remove("atf-ei");
                    child.style.animationName = "balloonSlow1";
                    child.onanimationend = (evt) => {
                        evt.stopPropagation();
                        child.style.animationName = "balloonSlow2";
                        child.onanimationend = (evt) => {
                            evt.stopPropagation();
                            child.style.animationName = null;
                        }
                    }
                }
            }
            setTimeout(() => {
                const size = getSize();
                if (size.includes("xs")) {
                    duration = 3500;
                }
                if (size.includes("sm")) {
                    duration = 3000;
                }
                if (size.includes("md")) {
                    duration = 2500;
                }
                if (size.includes("lg")) {
                    duration = 2000;
                }
                balloon.classList.add("atf-ei");
                balloon.classList.add(`adu-${duration}`);
                animatorBalloons(
                    balloon,
                    balloon.offsetTop + "px",
                    -balloon.clientHeight + "px",
                    step + 1
                );
            }, 5000);
        }
    } else {
        rotateBalloon(child, starter);
        balloon.onanimationend = () => {
            balloon.onanimationend = null;
            balloon.classList.remove("atf-ei");
            balloon.classList.remove(`adu-${duration}`);
            balloon.style.animationName = null;
            balloon.classList.add("v-h");
            child.style.animationName = null;
        }
    }
}
function animatorPopper() {
    pp.style.animationName = "pp-scd";
    pp.onanimationend = (evt) => {
        evt.stopPropagation();
        pp.onanimationend = null;
        pp_p.style.animationName = null;
        pp.style.animationName = "pp-scu";
        pp.onanimationstart = (evt) => {
            evt.stopPropagation();
            pp.onanimationstart = null;
            if (pp_p.classList.contains("v-h")) {
                pp_p.classList.remove("v-h");
            }
        }
        pp.onanimationend = (evt) => {
            evt.stopPropagation();
            pp.onanimationend = null;
            pp.style.animationName = null;
            pp_p.style.animationName = "pp-slr";
        }
    }
}
// new-year }

export default {
    animatorName,
    animatorDesc,
    animatorTitle,
    startAnimateBalloon,
    animatorPopper,
};
export {
    animatorName,
    animatorDesc,
    animatorTitle,
    startAnimateBalloon,
    animatorPopper,
}
