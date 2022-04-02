const nameBox = document.getElementById("name_box");
const a_n = document.getElementById("a-n");
const a_bl = document.getElementById("a-bl");
const a_bb = document.getElementById("a-bb");
const a_br = document.getElementById("a-br");
const a_bt = document.getElementById("a-bt");

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

export default animatorName;
export {
    animatorName
}
