import React from 'react';
import Task from './Task';

function Tasks({tasks, deleteTask, toggleTaskReminder}) {
  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskReminder={toggleTaskReminder}
        />
        ))
      }
      {tasks.length === 0 &&
      <span>'No tasks to show'</span>
      }
    </div>
  )
}

export default Tasks

