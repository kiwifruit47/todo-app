import React, { useState } from 'react';
import './App.css';
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDoneOutline } from "react-icons/md";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [toBeDeleted, setToBeDeleted] = useState(null);

  const deleteTask = (taskValue) => {
    setToBeDeleted(taskValue);
    setTimeout(() => {
      setTodoList(todoList.filter(task => task != taskValue));
      setToBeDeleted(null);
    }, 1000)
  }

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <div className='taskAddingContainer'>
        <input 
          type="text" 
          name="newTaskInput" 
          placeholder='Add new task'
          value={newTask} 
          onChange={(event) => {
            event.preventDefault();
            setNewTask(event.target.value);
        }}/>
        <button onClick={() => {
          if (newTask != "") {
            setTodoList([...todoList, newTask])
            setNewTask("");
          } else {
            alert("No task in text field");
          }
          
          }}>
            <FiPlusCircle style={{height: "2rem", width: "2rem"}}/>
        </button>
      </div>
      
      <div className='todoList'>
        {todoList.map((taskValue, index) => {
          return <div key={index} style={{backgroundColor: toBeDeleted === taskValue ? "#96C291" : "#D2649A"}} className='taskBox'>
            {index + 1}. {taskValue}
            <button  className='doneBtn' onClick={() => deleteTask(taskValue)}>
              <MdOutlineDoneOutline style={{height: "2rem", width: "2rem", backgroundColor: toBeDeleted === taskValue ? "#96C291" : "#D2649A"}}/>
            </button>
            </div>
        })}
      </div>
    </div>
  )
}

export default App
