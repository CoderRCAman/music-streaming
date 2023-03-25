const { signin, signup, logout } = require("../controllers/user.contoller");

const router = require("express").Router();

router.route("/login").post(signin);
router.route("/signup").post(signup);
router.route("/logout").get(logout);

module.exports = router