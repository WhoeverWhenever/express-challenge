const express = require("express");
const errorMdware = require("./middlewares/error.mdware");

const app = express();
const port = 3000;

const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students");
const articlesRouter = require("./routes/articles.js");
const logger = require("./middlewares/app.mdware.js");

app.use(logger, express.json());
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/articles", articlesRouter);
app.use(errorMdware);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});

