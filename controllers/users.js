const UserModel = require("../models/users");

exports.user_register = async (req, res) => {
  const username = req.body.username;

  const findUser = await UserModel.findUser(username);

  if (findUser.length != 0) {
    return res.status(200).send({
      data: findUser,
    });
  } else {
    const { inserted } = await UserModel.createUser(req.body);
    return res.send({
      created: !!inserted,
      data: findUser,
    });
  }
};

exports.user_login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UserModel.loginUser(username);
    if (user.length === 0) {
      return res.status(200).json({
        status: "User does not exist",
      });
    } else if (user[0].password !== password) {
      return res.status(200).json({
        status: "Password incorrect",
      });
    } else {
      return res.send({
        token: user[0].id,
        username,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
