import './Task.css'
import React, { useState } from "react";
const Task = (props) => {
  var task = props.task;
  const [classValue, setClassValue] = useState("taskname");
  const handleTaskStatus = (event) => {
    /*handle task object status */
    setClassValue(event.target.checked ? "tasknamecrossed" : "taskname");

  }
  return (
    <>
      <div className="task" onClick={() => {/*expand task*/ }}>
        <input type="checkbox" className="checkbox" id={task.taskId} onChange={handleTaskStatus} />
        <label htmlFor={task.taskId}><strong className={classValue}>{task.title}</strong></label>
      </div>
    </>);
}

export default Task;