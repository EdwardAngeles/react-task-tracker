import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const tasksFromSomewhere = [
  {
    id: 1,
    text: "Doctor Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true
  },
  {
    id: 2,
    text: "Metting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:3pm",
    reminder: false
  }
];

function App() {
  const [tasks, setTasks] = useState(tasksFromSomewhere);
  const deleteTask = (taskId) => {
    console.log(`deleting task[${taskId}]`);
  };
  
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
