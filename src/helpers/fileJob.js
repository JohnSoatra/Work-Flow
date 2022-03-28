function AddDocToFiles(files, file) {
    for (var i = 0; i < files.length; i++) {
        if (file.isFile == files[i].isFile) {
            if (file.name < files[i].name) {
                files.splice(i, 0, file);
                return;
            }
        } else if (!file.isFile) {
            files.splice(i, 0, file);
            return;
        }
    }
    files[i] = file;
}

function fileName(path) {
    let slices;
    if (path.includes("\\")) {
        slices = path.split("\\");
    } else if (path.includes("/")){
        slices = path.split("/");
    } else {
        slices = [path];
    }
    return slices[slices.length - 1];
}

export default {
    AddDocToFiles,
    fileName
}
export {
    AddDocToFiles,
    fileName
}
