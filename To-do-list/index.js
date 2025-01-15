import express from "express"
import bodyParser from "body-parser"
import tasksRouter from "./routes/tasks.js"

const app = express()
const port = 3000;

app.use(express.static("public"));
app.use(express.json());//middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/tasks", tasksRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });