import express from "express"
import pool from "../db/db.js"
import {printDate} from "../public/js/date.js"

const router = express.Router();

router.get("/", (req, res) => {
  const date = printDate();
  res.render("index.ejs", {date});  
});

router.get("/tasks", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
      res.json(result.rows);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      res.status(500).send("Internal server error");
    }
  });
router.get("/tasks", async (req, res) => {
    try {
      const result = await pool.query(queries.getAllTasks);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching tasks");
    }
  });
  router.post("/tasks", async (req, res) => {
    const { task } = req.body;
    if (!task || task.trim() === "") {
        return res.status(400).send("Task cannot be empty");
    }
    try {
        const result = await pool.query(
            "INSERT INTO tasks (task) VALUES ($1) RETURNING *",
            [task]
        );
        res.status(201).json(result.rows[0]); // Send back the created to-do
    } catch (error) {
        console.error("Error adding to-do:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task content is required" });
  }

  try {
    const result = await pool.query("UPDATE tasks SET task = $1 WHERE id = $2 RETURNING *", [task, id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
export default router;