import { BalloonDown, BalloonFromDown, BalloonFromUp, BalloonUp } from "./constants.js";
import { addKeyframe } from "./funs.js";

// new-year {
function createKeyframes() {
    const degree = 10;
    const animUp = {
        "0%": { "transform": "rotate(0deg)" },
        "100%": { "transform": `rotate(${degree}deg)` }
    }
    const animFromUp = {
        "0%": { "transform": `rotate(${degree}deg)` },
        "100%": { "transform": "rotate(0deg)" }
    }
    const animDown = {
        "0%": { "transform": "rotate(0deg)" },
        "100%": { "transform": `rotate(-${degree}deg)` }
    }
    const animFromDown = {
        "0%": { "transform": `rotate(-${degree}deg)` },
        "100%": { "transform": "rotate(0deg)" }
    }
    const keys = [
        BalloonUp,
        BalloonFromUp,
        BalloonDown,
        BalloonFromDown
    ];
    addKeyframe(keys[0], animUp);
    addKeyframe(keys[1], animFromUp);
    addKeyframe(keys[2], animDown);
    addKeyframe(keys[3], animFromDown);
}
function createPopperKeyframes() {
    const scaleUp = {
        "0%": { 
            "transform": "scale(0, 0)",
            "opacity": 0,
        },
        "100%": { 
            "transform": "scale(1, 1)",
            "opacity": 1,
        },
    }
    const scaleDown = {
        "0%": { 
            "transform": "scale(1, 1)",
            "opacity": 1,
        },
        "100%": { 
            "transform": "scale(0, 0)",
            "opacity": 0,
        },
    }
    const slideRight = {
        "0%": { 
            "left": "40px"
        },
        "100%": { 
            "left": "100%",
            "transform": "translateX(-100%)"
        },
    }
    addKeyframe("pp-scu", scaleUp);
    addKeyframe("pp-scd", scaleDown);
    addKeyframe("pp-slr", slideRight);
}
// new-year }
export default {
    createKeyframes,
    createPopperKeyframes
}
export {
    createKeyframes,
    createPopperKeyframes
}