

import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container0">
     
      <nav className="navbar0">
        <div className="container">
          <span className="navbar"> Todo App</span>
        </div>
      </nav>

   
      <div className="input">
        <input
          type="text"
          className="form-control"
          placeholder  ="  Enjoy..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={handleAdd}>
          Add Task
        </button>
      </div>

     
      <ul className="list-group">
        {tasks.map((t, index) => (
          <li key={index} className="list">
            {t}
            <button className="btn btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;


