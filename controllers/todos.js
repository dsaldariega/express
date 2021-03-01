const TodoModel = require("../models/todos");

exports.todo_post_todo = async (req, res) => {
  try {
    const todos = req.body;
    const { inserted } = await TodoModel.createTask(req.body);
    return res.send({
      created: !!inserted,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.todos_get_incomplete = async (req, res) => {
  try {
    const todos = await TodoModel.getAllTodosIncomplete(req.params.id);
    return res.send(todos);
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.todos_get_complete = async (req, res) => {
  try {
    const todos = await TodoModel.getAllTodosCompleted(req.params.id);
    return res.send(todos);
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.todo_update_status = async (req, res) => {
  try {
    const todos = await TodoModel.updateTodoStatus(req.params.id);
    return res.send(todos);
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.todo_update_status_undo = async (req, res) => {
  try {
    const todos = await TodoModel.undoTodoStatus(req.params.id);
    return res.send(todos);
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.todo_delete = async (req, res) => {
  try {
    const todos = await TodoModel.deleteTodo(req.params.id);
    return res.send(todos);
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
