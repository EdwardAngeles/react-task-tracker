import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/tasks');
      const data     = await response.json();
      setTasks(data);
    })();
  }, []);
  
  const addTask = (task) => {
    fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    
    task = {id: tasks.length + 1, ...task}
    setTasks([...tasks, task]);
  };
  
  const deleteTask = async (taskId) => {
    fetch(`http://localhost:5000/tasks/${taskId}`, {method: 'DELETE'});
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  
  const toggleTaskReminder = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id !== taskId) return task;
      task.reminder = !task.reminder;
      return task;
    }));
  };
  
  const toggleForm= () => setShowForm(!showForm);
  
  return (
    <div className="container">
      <Header title="Task Tracker" onAddBtnClicked={toggleForm}/>
      {showForm && <AddTaskForm addTask={addTask}/>}
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskReminder={toggleTaskReminder}
      />
    </div>
  );
}

export default App;
