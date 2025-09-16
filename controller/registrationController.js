const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const emailValidation = require("../services/emailValidation");
const passwordValidation = require("../services/passwordValidation");
const generateOTP = require("../utility/otpGenerator");
function registrationController(req, res) {
  console.log(req.body);
  const { firstName, lastName, email, password, varified } = req.body;
  if (!firstName) {
    return res.json("Plz give your first name");
  }
  if (!lastName) {
    return res.json("Plz give your lastName");
  }
  if (!email) {
    return res.json("email is required");
  }
  if (!emailValidation(email)) {
    return res.json("plz give right email");
  }
  if (!password) {
    return res.json("password is required");
  }
  if (!passwordValidation(password)) {
    return res.json("plz give atleast 8 character");
  }

  bcrypt.hash(password, 10, function (err, hash) {
    const user = new userSchema({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash,
      varified: varified,
      otp: generateOTP(5)
    });
    user.save();
    res.status(201).json({
      message: "Registration successful",
      data: user,
    });
  });
}
module.exports = registrationController;
