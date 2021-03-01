const r = require("../db");

module.exports = {
  postTodo: (data) => {
    return r.table("todos").insert(data).run();
  },

  getAllTodos: (id) => {
    return r.table("todos").filter({ userToken: id }).coerceTo("array").run();
  },

  getAllTodosIncomplete: (id) => {
    return r
      .table("todos")
      .filter({ userToken: id, status: 0 })
      .coerceTo("array")
      .run();
  },
  getAllTodosCompleted: (id) => {
    return r
      .table("todos")
      .filter({ userToken: id, status: 1 })
      .coerceTo("array")
      .run();
  },

  updateTodoStatus: (id) => {
    return r
      .table("todos")
      .filter({ id: id })
      .update({ status: 1 })
      .coerceTo("array")
      .run();
  },

  undoTodoStatus: (id) => {
    return r
      .table("todos")
      .filter({ id: id })
      .update({ status: 0 })
      .coerceTo("array")
      .run();
  },

  deleteTodo: (id) => {
    return r.table("todos").get(id).delete().run();
  },
};
