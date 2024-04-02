import React, {useRef} from "react";
import "./AddTask.css";

function AddTask({taskArr, setTaskArr}) {
    const inputref = useRef(null);
    const buttonOnClick = () => {
        if (!taskArr.includes(inputref.current.value)) {

            taskArr.push(inputref.current.value);
            setTaskArr(taskArr);
            inputref.current.value = "";
        }
    }
    return (
        <div className="add_task">
            <input ref={inputref} />
            <button onClick={buttonOnClick} >+</button>
        </div>
    )
}

export default AddTask