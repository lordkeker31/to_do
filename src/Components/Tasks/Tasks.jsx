import React from "react";
import { v4 } from "uuid";
import "./Tasks.css";

function Tasks({ taskArr, setTasksArr }) {
    console.log("reload");
    return (
        <div key={v4()} className="tasks">
            {taskArr.length > 0 ? taskArr.map((el) => {
                return (
                    <div className="tasks_el">
                        <p>{el}</p>
                        <button onClick={ () => {
                                for (let i = 0; i < taskArr.length; i++) {
                                    if (taskArr[i] == el) {
                                        taskArr.splice(i, 1);
                                        setTasksArr(taskArr)
                                    }
                                }
                            }}>remove</button>
                    </div>)
            }) : <span className="tasks_el">Nothing There!</span>}
        </div>
    )
}
export default Tasks