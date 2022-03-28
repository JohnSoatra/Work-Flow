const password = new RegExp(/^.{8,}$/);
const email = new RegExp(/^\w+@\w+(\.\w+)+$/);
const username = new RegExp(/^\w+$/);
const gender = new RegExp(/^male$|^female$/);
const file = new RegExp(/^([^\\/.]*\.{0,1}[^\\/.]+)(\.[^\\/.]+)*$/);

export default {
    password,
    email,
    username,
    gender,
    file
};
export {
    password as regPassword,
    email as regEmail,
    username as regUsername,
    gender as regGender,
    file as regFile
};
