const rethinkdbdash = require("rethinkdbdash");

module.exports = rethinkdbdash({
  host: DB_HOST,
  port: DB_PORT,
  db: DB_NAME,
});