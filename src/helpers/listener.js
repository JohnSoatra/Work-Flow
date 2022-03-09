const Temper = [];

function updateState(
    state,
    key,
    value
) {
    const tempKey = 'temp' + key;

    if (Temper.indexOf(state) == -1) {
        state[tempKey] = state[key];
        Temper.push(state);
    }
    if (state[tempKey] !== value) {
        const tempValue = " " + value;
        state[key] = tempValue;
        state[key] = tempValue.replace(" ", "");
        state[tempKey] = state[key];
    }
}

function looper(action = () => {}) {
    action();
    setTimeout(() => looper(action), 0);
}


export {
    updateState,
    looper
}
