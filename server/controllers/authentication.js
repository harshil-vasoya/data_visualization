const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ------------------- Sing in -----------------------
exports.SignIn = async (req, res) => {
  console.log(req.body);
  var { username, email, password, cpassword } = req.body;

  if (!(username && email && password && cpassword))
    return res.json({ status: "MISSING_FIELD", messgae: "all fildes are required.", });


  if (cpassword !== password)
    return res.json({ status: "OTHER", message: "confirm password should match." });


  if (await User.findOne({ $or: [{ username }, { email }] }))
    return res.json({ status: "EXISTS", message: "either username of email allrady exist." });


  try {
    var data = await User.create({ username, email, password });

  } catch (error) {
    
    return res.json({ status: "X", message: "something went wrong in creating User", error, });
  }

  data.password = undefined;

  res.json({ status: "OK", data });
};

// ------------------------ Log in ---------------------------

exports.LogIn = async (req, res) => {
  var { email, password } = req.body;

  if (!(email && password)) {
    return res.json({ status: "MISSING_FIELD", message: "all fileds are required.", });
  }

  try {
    var data = await User.findOne({ $or: [{ username: email }, { email }] });

    if (!data)
      return res.json({ status: "NOT_EXIST", message: "User does not exist" });

    if (!bcrypt.compare(password, data.password))
      return res.json({ status: "INVALID_PW", message: "password is invalid." });

    var token = jwt.sign({ user_id: data._id }, process.env.TOKEN_KEY, { expiresIn: "10h" });

    res.json({ status: "OK", token, username: data.username });

  } catch (error) {
    return res.json({ status: "X", message: "something went wrong while User Login", error });
  }
};

// =============================================================
