const temper = [];
const state = {
    hasUsername: false,
    hasPassword: false
}

function checkProp(
    object,
    ...keys
) {
    keys.forEach(key => {
        const tempKey = 'temp' + key;
        const value = state[key];

        if (temper.indexOf(object) == -1) {
            object[tempKey] = object[key];
            temper.push(object);
        }
        if (object[tempKey] !== value) {
            object[key] = "";
            object[key] = value;
            object[tempKey] = value;
        }
    });
}

function always(action = () => {}) {
    action();
    setTimeout(() => always(action), 0);
}

export default state;
export {
    checkProp,
    always
}
