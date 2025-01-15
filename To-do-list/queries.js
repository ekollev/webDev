const queries = {
    getAllTasks: "SELECT * FROM tasks",
    addTask: "INSERT INTO tasks (task) VALUES ($1) RETURNING *",
    updateTask: "UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *",
    deleteTask: "DELETE FROM tasks WHERE id = $1 RETURNING *",
  };
  
  export default queries;