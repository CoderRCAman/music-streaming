const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not valid email`,
    },
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minLength: [3, "Too short name"],
    maxLength: [40, "Too large name"],
  },
  password: {
    type: String,
    minLength: [4, "Too short password"],
    required: true,
  },
  username: {
    type: String,
    minLength: [4, "Too short username"],
    required: true,
  },
  role : {
    type:String , 
    default:'user'
  },
  
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});
//vadlidate the password
userSchema.methods.isValidatedPassword = async function (usersendPassword) {
  try {
    return await bcrypt.compare(usersendPassword, this.password);
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = mongoose.model("user", userSchema);
