const router = require("express").Router();

const users_controller = require("../controllers/users");

router.post("/login", users_controller.user_login);

router.post("/register", users_controller.user_register);

module.exports = router;
