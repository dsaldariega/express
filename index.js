require("dotenv").config();
Object.keys(process.env).forEach((key) => (global[key] = process.env[key]));

const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");
const usersRouter = require("./routes/users");

app.use(express.json());
app.use("/todos", todosRouter);
app.use("/users", usersRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
