export default {
    delete_,
    get,
    post,
    postFile,
    put,
};
export {
    delete_,
    get,
    post,
    postFile,
    put,
};

function get(url) {
    return fetch(url);
}

function post(url, body) {
    const queryString = createQueryString(body);
    const response = fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryString
    });
    return response;
}

function put(url, body) {
    const queryString = createQueryString(body);
    const response = fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryString
    });
    return response;
}

function delete_(url) {
    return fetch(url, { method: "delete" });
}

function postFile(url, files, data = []) {
    const formData = createFormData(files, data);
    const response = fetch(url, {
        method: "post",
        body: formData
    });
    return response;
}

function createQueryString(body) {
    let queryString = "";
    for (const key in body) {
        queryString += `${key}=${body[key]}&`;
    }
    if (queryString !== "") {
        queryString = queryString.slice(0, queryString.length-1);
    }
    return queryString;
}

function createFormData(files, data) {
    const formData = new FormData();
    for (const key in files) {
        formData.append(key, files[key]);
    }
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return formData;
}
