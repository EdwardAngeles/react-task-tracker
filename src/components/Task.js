import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({task, deleteTask, toggleTaskReminder}) {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : null}`}
      style={{userSelect: 'none'}}
      onDoubleClick={() => toggleTaskReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
};

export default Task;
