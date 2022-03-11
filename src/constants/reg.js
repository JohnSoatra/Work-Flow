const password = new RegExp(/^.{8,}$/);
const email = new RegExp(/^\w+@\w+(\.\w+)+$/);
const username = new RegExp(/^\w+$/);
const gender = new RegExp(/^male$|^female$/);

export default {
    password,
    email,
    username,
    gender
};
export {
    password as regPassword,
    email as regEmail,
    username as regUsername,
    gender
};
