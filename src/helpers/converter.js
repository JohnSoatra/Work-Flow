function fileListToArray(files) {
    const result = [];
    for (let i = 0; i < files.length; i ++) {
        result.push(files[i]);
    }
    return result;
}

export default {
    fileListToArray
}

export {
    fileListToArray
}
