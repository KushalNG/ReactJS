import React,{useState} from "react";
import './index.css'

function ToDoList() {

    const [tasks,settasks] = useState([])
    const [newTask , setnewTask] = useState("")

    function handleInputChange(event) {
        setnewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            settasks(t => [...t,newTask]);
        setnewTask("");
        }
        

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index )
        settasks(updatedTasks)

    }

    function TaskMoveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks] ;
            [updatedTasks[index],updatedTasks[index-1]] =
            [updatedTasks[index-1],updatedTasks[index]] ;
            settasks(updatedTasks) ;
        }

    }

    function TaskMoveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks] ;
            [updatedTasks[index],updatedTasks[index+1]] =
            [updatedTasks[index+1],updatedTasks[index]] ;
            settasks(updatedTasks) ;
        }

    }
 
    return (
        <div className="To-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                       placeholder="Enter a task..."
                       value={newTask}
                       onChange={handleInputChange}/> 

                <button className="add-button"
                        onClick = {addTask}>
                    Add Task
                </button>

            </div>

            <ol>
                { tasks.map ((task,index) => 
                    <li key={index}>
                        <span className="text">{task} </span>
                        <button className="Delete-button" 
                                onClick={ () => deleteTask(index)}  >
                                Delete
                        </button>

                        <button className="move-up-button"
                                onClick={ () => TaskMoveUp(index)}>
                                ☝️
                        </button>

                        <button className="move-down-button"
                                onClick={() => TaskMoveDown(index)} >
                                👇
                        </button>

                        </li>
                    )
                }
            </ol>
        </div>
    );
}

export default ToDoList