const r = require("../db");

module.exports = {
  getAll: () => {
    return r.table("users").coerceTo("array").run();
  },
  getById: (id) => {
    return r.table("users").get(id).run();
  },
  createUser: (data) => {
    return r.table("users").insert(data).run();
  },
  loginUser: (username) => {
    return r.table("users").filter({ username }).run();
  },
  findUser: (username) => {
    return r.table("users").filter({ username }).run();
  },

  
};
