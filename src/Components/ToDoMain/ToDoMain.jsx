import React, {useState} from "react";
import "./ToDoMain.css";
import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";

function ToDoMain() {
    const [taskArr, setTaskArr] = useState(JSON.parse(localStorage.getItem("taskList")));
    if (taskArr == null) setTaskArr([]);
    const setTaskArrCallback = (value) => {
        setTaskArr([...value]);
        localStorage.setItem("taskList", JSON.stringify(taskArr));
    }
    return (
        <div className="to_do_main">
            <span>{taskArr}</span>
            <AddTask taskArr={taskArr} setTaskArr={setTaskArrCallback} />
            <Tasks taskArr={taskArr} setTasksArr={setTaskArrCallback} />
        </div>
    )
}

export default ToDoMain