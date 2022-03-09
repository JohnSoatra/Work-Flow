const password = new RegExp(/^.{8,}$/);
const email = new RegExp(/^\w+@\w+(\.\w+)+$/);
const username = new RegExp(/^\w+$/);

export default {
    password,
    email,
    username
};
export {
    password as regPassword,
    email as regEmail,
    username as regUsername
};
