const User = require("../models/user");
const signup = async (request, response) => {
  const { email, name, password, username } = request.body;
  //validate
  try {
    const ifUserExist = await User.findOne({ email: email });
    if (ifUserExist)
      return response.status(401).json({
        msg: "User already exist",
      });
    const newUser = new User({ email, name, password, username });
    await newUser.save();
    return response.status(201).json({ msg: "Successfully saved!" });
  } catch (error) {
    console.log(error);
    if (error.name == "ValidationError") {
      let errors = [];

      Object.keys(error.errors).forEach((key) => {
        errors.push(error.errors[key].message);
      });
      return response.status(400).json({
        msg: "validationError",
        body: errors,
      });
    }
    return response.status(500).json({ msg: "Internal server error" });
  }
};
const signin = async (request, response) => {
  const { email, password } = request.body;
  try {
    const foundUser = await User.findOne({ email: email });
    if (!foundUser)
      return response.status(400).json({
        msg: "No such user was found!",
      });
    if (foundUser.isValidatedPassword(password)) {
      response.cookie("auth", true, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });
      response.cookie("user_id", foundUser._id, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });
      response.cookie("role", foundUser.role, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });

      return response.status(200).json({
        msg: "Successfully authenticated",
        auth: true,
        id: foundUser._id,
        expiry: 1000 * 60 * 60 * 24 * 3,
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      msg: "Internal server error",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth");
  res.clearCookie("id");
  res.clearCookie("role");
  return res.status(200).json({
    msg: "logged out",
  });
};

module.exports = { signup, signin, logout };
