import "./App.css"
import Task from './Components/Task'
import AddTask from './Components/AddTask'
import createTask from "./Components/TaskCreator"
import { useState } from "react"
function App() {
  const [tasks, setTasks] = useState(new Array)
  const getTaskData = (title) => {
    let task = createTask(title);
    setTasks([...tasks, createTask(title)]);
  }
  return (
    <div className="App">
      <>
        <div className="list">
          {tasks.map(task => <Task key={task.taskId} task ={task} />)}
          <AddTask grabData={getTaskData} />
        </div>
      </>
    </div>
  )
}

export default App
