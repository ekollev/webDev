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
router.post("/tasks/:activeSection", async (req,res) =>{
  const { task } = req.body;
  const { activeSection } = req.params;

  if(!activeSection || activeSection.trim() === ""){
    return res.status(400).send("Active section cannot be empty.")
  }
  try{
    const result = await pool.query("INSERT INTO tasks (task, active_section) VALUES ($1, $2) RETURNING *", [task, activeSection]);

    const newTask = result.rows[0];

    res.status(201).json(newTask)
    
  }
  
  catch(error){
    console.error("Error saving active section:", error);
    res.status(500).send("Internal Server Error.");
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

//router.post.active_section.ends. check this thing also

router.delete("/tasks/:id", async(req, res) => {
  const { id } = req.params;
  try{
    const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
    if(result.rows.length === 0){
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(result.rows[0]);
  }catch (error){
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;