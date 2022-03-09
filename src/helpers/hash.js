export {
    sha256
};
export default {
    sha256
};

async function sha256(string) {
    const msgBuffer = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(buffer => buffer.toString(16).padStart(2, '0'))
        .join("");
    return hashHex;
}
