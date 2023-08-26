import "./AddTask.css"
import { useState } from "react";
const AddTask = (props) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [hint, setHint] = useState("+ Add task...");
    const handleChange = (event) => {
        setTaskTitle(event.target.value)
    }
    const flushTask = () => {
        props.grabData(taskTitle);
        setTaskTitle("")
    }
    return (
        <div className="addtask" >
            <>
                <input type="text" 
                className="addtasktext" 
                placeholder={hint} 
                minLength={5} 
                value={taskTitle} 
                onClick={() => setHint(() => "  Type task name and press Enter...")} 
                onChange={handleChange} 
                onKeyDown={(event) => { event.key == 'Enter' && taskTitle != "" ? flushTask() : undefined }} 
                />

            </>
        </div>

    );
}
export default AddTask;