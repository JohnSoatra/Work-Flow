function convertArrStrToArrObj(id, files = []) {
    const result = [];
    for (const file of files) {
        result.push(convertStrToObj(id, file));
    }
    return result;
}

function convertStrToObj(id, file) {
    return {
        name: file,
        link: `${id}/${file}`
    }
}

function fileListToList(files) {
    const result = [];
    for (let i = 0; i < files.length; i ++) {
        result.push(files[i]);
    }
    return result;
}

export default {
    convertArrStrToArrObj,
    convertStrToObj,
    fileListToList
}
export {
    convertArrStrToArrObj,
    convertStrToObj,
    fileListToList
}
