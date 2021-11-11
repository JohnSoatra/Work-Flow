const express = require("express");
const cors = require("cors");
const firebase = require("./fb_config/fb_admin");
const app = express();
const port = process.env.port || 8080;
const bucket = firebase.storage().bucket("gs://meka-356bd.appspot.com");
const store = firebase.firestore();

// const originName = /localhost:5500$/;
const originName = /meka\.soatra\.com$/;

app.use(cors());
app.use((req, res, next) => {
  const reqOriginName = req.headers.origin;
  if (originName.test(reqOriginName)) {
    next();
  }
  else {
    if (req.method === "GET") {
      next();
    }
    else {
      res.json({msg: "no permission"});
    }
  }
});
app.get("/", (_, res) => {
  res.send("Meka app is a sub-website of Meka. Meka app contains a lot of apps hosted by uses.");
});
app.get("/:appName/**", (req, res) => {
  let url = req.url.replace("/", "");
  let appName = req.params.appName;
  if (url === `${appName}/`) { 
    url = `${appName}/index.html`;
  }
  bucket.file(url).download().then(resIn => {
    res.end(resIn[0]);
  }, error => res.send("There are some problem.")).catch(error => res.send("There are some problem."));
});
app.get("/:appName", async (req, res) => {
  res.redirect(`/${req.params.appName}/`);
});
app.post("/signin", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  store.collection("users").where("email", "==", email).get().then(resIn => {
    if (!resIn.empty) {
      store.collection("users").where("password", "==", password).get().then(resIn => {
        if (!resIn.empty) {
          res.send({status: "success", msg: "correct infomation"});
        }
        else {
          res.send({status: "fail", msg: "wrong password"});
        }
      });
    }
    else {
      store.collection("users").add({email, password});
      res.send({status: "success", msg: "new create"});
    }
  });
});
app.post("/docs", (req, res) => {
  const email = req.query.email;
  store.collection("users").where("email", "==", email).limit(1).get().then(resIn => {
    resIn.forEach(snapShot => {
      const names = snapShot.data().names ?? [];
      res.json({names});
    });
  });
});
app.post("/addname", (req, res) => {
  const email = req.query.email;
  const name = req.query.name;
  store.collection("users").where("email", "==", email).limit(1).get().then(resIn => {
    resIn.forEach(snapShot => {
      const id = snapShot.id;
      const names = snapShot.data().names ?? [];
      store.collection("users").doc(id).update({names: [...names, name]}).then(resIn => {
        res.json({status: "success"});
      });
    });
  });
});
app.post("/removename", (req, res) => {
  const email = req.query.email;
  const name = req.query.name;
  store.collection("users").where("email", "==", email).limit(1).get().then(resIn => {
    resIn.forEach(snapShot => {
      const id = snapShot.id;
      const names = snapShot.data().names ?? [];
      names.splice(names.indexOf(name), 1);
      store.collection("users").doc(id).update({ names }).then(resIn => {
        res.json({status: "success"});
      });
    });
  });
});
app.post("/config", (_, res) => {
  res.json({
    apiKey: "AIzaSyAl-IGzGVkfZMcaxz7jM4LGfE0lVuL272M",
    authDomain: "meka-356bd.firebaseapp.com",
    projectId: "meka-356bd",
    storageBucket: "meka-356bd.appspot.com",
    messagingSenderId: "779520340240",
    appId: "1:779520340240:web:5cf72dc00cf9e86208b595"
  });
});
app.listen(port, () => console.log("The app is running!"));