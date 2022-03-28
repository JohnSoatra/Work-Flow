function range(start, end) {
    const result = [];
    if (end > start) {
        for (let i = start; i < end; i ++) {
            result.push(i);
        }
    } else {
        for (let i = start; i > end; i --) {
            result.push(i);
        }
    }
    return result.sort();
}

export default range;
export {
    range
}