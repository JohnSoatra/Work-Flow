function addSub(str, sub) {
    const arr = str.split(".");
    arr[0] += sub;
    return arr.join(".");
}

export default addSub;
export {
    addSub
}
