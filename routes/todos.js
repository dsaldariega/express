const router = require("express").Router();

const todos_controller = require("../controllers/todos");

router.post("/addtodo", todos_controller.todo_post_todo);

router.get("/incomplete/:id", todos_controller.todos_get_incomplete);

router.get("/completed/:id", todos_controller.todos_get_complete);

router.put("/update/:id", todos_controller.todo_update_status);

router.put("/undoupdate/:id", todos_controller.todo_update_status_undo);

router.delete("/deletetodo/:id", todos_controller.todo_delete);

module.exports = router;
