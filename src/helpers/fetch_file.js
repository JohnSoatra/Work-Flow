async function dataUrl(input) {
    const type = typeof(input);
    if (type === "string") {
        return new Promise(function(response, reject) {
            fetch(input).then(res => {
                res.blob().then(blob => {
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
    } else {
        return new Promise(function(response, reject) {
            const fr = new FileReader();
            fr.readAsDataURL(input);
            fr.onload = function() {
                return response(fr.result);
            }
            fr.onerror = function() {
                return reject(fr.result);
            }
        });
    }
}

export default {
    dataUrl
}

export {
    dataUrl
};
