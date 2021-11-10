const firebase = require("firebase-admin");
const serviceAccount = require("./meka-356bd-firebase-adminsdk-gvde0-2aaa8c380d.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});
module.exports = firebase