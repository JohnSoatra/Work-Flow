async function dataUrl(url) {
    return new Promise(function(response, reject) {
        fetch(url).then(res => {
            res.arrayBuffer().then(array => {
                const blob = new Blob([array]);
                const fr = new FileReader();
                fr.readAsDataURL(blob);
                fr.onload = function() {
                    return response(fr.result);
                }
                fr.onerror = function() {
                    return reject(fr.result);
                }
            });
        });
    });
}

export default {
    dataUrl
}

export {
    dataUrl
};
