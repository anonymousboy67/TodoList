// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";


function ToDoList(){

    const[tasks, setTask]=useState(["Eat breakfast", "Take a shower"]);
    const[newTask, setNewTask]=useState("");


    function handleInputChnage(event){
        setNewTask(event.target.value);

    }


    function addTask(){
        if(newTask.trim()!==""){
        setTask(t=>[...t, newTask]);
        setNewTask("")
        }

    }

    function deleteTask(index){

        const updatedTasks=tasks.filter((_,i)=>i !==index);
        setTask(updatedTasks)

    }

    function moveTaskUp(index){

        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index-1]];
            [updatedTasks[index-1], updatedTasks[index]];
            setTask(updatedTasks)
        }

    }

    function moveTaskDown(index){

        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index+1]];
            [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks)
        }

        
    }

    return(
       <div className="to-do-list">
        <h1>To-DO-List</h1>

        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChnage}/>
            <button
            className="add-button"
            onClick={addTask}>Add</button>

        </div>

        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button
                className="delete-button"
                onClick={()=>deleteTask(index)}>delete
                </button>

                <button
                className="move-button"
                onClick={()=>moveTaskUp(index)}>⬆️
                </button>

                <button
                className="move-button"
                onClick={()=>moveTaskDown(index)}>⬇️
                </button>
            </li>
            )}
        </ol>
       </div>
    )

}

export default ToDoList