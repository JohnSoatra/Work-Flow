export default {
    delete_,
    get,
    post,
    postFile,
    put,
    createQueryString
};
export {
    delete_,
    get,
    post,
    postFile,
    put,
    createQueryString
};

function get(url, options = {}) {
    return fetch(url, options);
}

function post(url, body, options = {}) {
    const queryString = createQueryString(body);
    const response = fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryString,
        ...options
    });
    return response;
}

function put(url, body, options = {}) {
    const queryString = createQueryString(body);
    const response = fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryString,
        ...options
    });
    return response;
}

function delete_(url, options = {}) {
    return fetch(url, {
        method: "delete",
        ...options
    });
}

function postFile(url, files, data = {}, options = {}) {
    const formData = createFormData(files, data);
    const response = fetch(url, {
        method: "post",
        body: formData,
        ...options
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
