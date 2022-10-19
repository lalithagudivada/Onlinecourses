var express = require("express");
var router = express.Router();
const app = express();
const { async } = require("@firebase/util");
const { FieldValue } = require("firebase-admin");
const { db } = require("../firebase.js");

//form validation
// router.get("/formsubmit", (req, res, next) => {
//   const studentname = req.query.lalitha;
//   console.log(studentname);
//   const studentpass = req.query.studentpass;
//   try {
//     db.collection("studentdata")
//       .where("studentname", "==", studentname)
//       .where("studentpass", "==", studentpass)
//       .get()
//       .then((docs) => {
//         if (docs.size > 0) {
//           //console.log(doc);
//           res.render("courses");
//         } else {
//           res.send("no user available");
//         }
//       });
//   } catch (error) {
//     res.json("error");
//   }
// });

router.get("/demoo", (req, res, next) => {
  const studentname = req.query.studentname;
  console.log(studentname);
  const studentpass = req.query.studentpass;
  try {
    db.collection("studentdata")
      .where("studentname", "==", studentname)
      .where("studentpass", "==", studentpass)
      .get()
      .then((docs) => {
        if (docs.size > 0) {
          //console.log(doc);
          res.render("courses");
        } else {
          res.render("invalid");
        }
      });
  } catch (error) {
    res.json("error");
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/demo", function (req, res, next) {
  res.render("demo", { title: "login" });
});
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "signup" });
});
//display courses
router.get("/regcourses", function (req, res, next) {
  res.render("regcourses", { title: "regcourses" });
});
router.get("/profile", function (req, res, next) {
  res.render("profile", { title: "profile" });
});
//formsumit
// router.get("/formsubmit", function (req, res, next) {
//   const UserJson = {
//     studentname: req.query.studentname,
//     studentpass: req.query.studentpass,
//   };

//   db.collection("logindata").add(UserJson);
//   res.render("courses", { title: "courses" });
// });
router.get("/signupdetails", function (req, res) {
  // const id = req.body.name;
  const UserJson = {
    studentname: req.query.studentname,
    lastname: req.query.lastname,
    email: req.query.email,
    studentpass: req.query.studentpass,
  };

  db.collection("studentdata").add(UserJson);
  res.render("courses", { title: "courses" });
});
//retrive the data from backend

router.get("/Cregister/:id", async (req, res) => {
  const c = req.params.id;
  console.log(c);
  try {
    const usersRef = db.collection(c);
    const doc = await usersRef.get();
    let responseArr = [];
    doc.forEach((ele) => {
      responseArr.push(ele.data());
      console.log(ele.data());
    });
    res.render("Cregister", { responseArr: responseArr });
    //res.send("hello")
    console.log(responseArr);

    //res.end()
  } catch (error) {
    res.send(error);
  }
});
//Form C language
router.get("/Cform", function (req, res) {
  res.render("Cform", { title: "Cform" });
});
router.get("/Cformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };
  db.collection("C Lang").add(UserJson);
  res.render("courses", { title: "courses" });
});

//Form C++ Language
router.get("/Cplusform", function (req, res) {
  res.render("Cplusform", { title: "Cplusform" });
});
router.get("/Cplusformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("C++ Lang").add(UserJson);
});
//CSS
router.get("/cssform", function (req, res) {
  res.render("cssform", { title: "cssform" });
});
router.get("/cssformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("cssLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//HTML
router.get("/htmlform", function (req, res) {
  res.render("htmlform", { title: "htmlform" });
});
router.get("/htmlformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("htmlLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//python
router.get("/pythonform", function (req, res) {
  res.render("pythonform", { title: "pythonform" });
});
router.get("/pythonformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("pythonLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//java
router.get("/javaform", function (req, res) {
  res.render("javaform", { title: "javaform" });
});
router.get("/javaformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("javaLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//Mongodb
router.get("/Mongodbform", function (req, res) {
  res.render("Mongodbform", { title: "Mongodbform" });
});
router.get("/Mongodbformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };
  db.collection("MongodbLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//Mysql
router.get("/mysqlform", function (req, res) {
  res.render("mysqlform", { title: "mysqlform" });
});
router.get("/mysqlformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("mysqlLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//react
router.get("/reactform", function (req, res) {
  res.render("reactform", { title: "reactform" });
});
router.get("/reactformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };
  db.collection("reactLang").add(UserJson);
  res.render("courses", { title: "courses" });
});
//node
router.get("/nodeform", function (req, res) {
  res.render("nodeform", { title: "nodeform" });
});
router.get("/nodeformdata", function (req, res) {
  const UserJson = {
    stdname: req.query.stdname,
    stdemail: req.query.stdemail,
  };

  db.collection("nodeLang").add(UserJson);
  res.render("courses", { title: "courses" });
});

router.get("/courses", function (req, res, next) {
  res.render("courses", { title: "courses" });
});
router.post("/courses", (req, res, next) => {
  res.render("courses");
});

router.get("/read/:id", async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.params.id);
    const response = await userRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
