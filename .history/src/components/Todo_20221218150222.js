import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const taskQty = items.length
  const taskComplete = items.filter(task => task.isCompleted).length;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      return alert("Please input value!");
    }
    AddTask(title);
    setTitle("");

  };
  const dateInfos = () => {
    const date = new Date();
    const day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    return `${day}, ${month} ${year}`;
}

  const AddTask = (text) => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        text: text,
        isCompleted: false
      },
    ]);
  };

  const handleCheck = (taskId) => {
    const newItems = items.map(task => {
    if(task.id === taskId) {
      return {
        ...task,
        isCompleted: !task.isCompleted
      }  
    }
      return task;
    })
    setItems(newItems);
  }

  const handleCheckAll = () => {
    const newItems = items.map(task => {
      if(!task.isCompleted) {
       return {
        ...task,
        isCompleted: !task.isCompleted
       }
    } else {
      
      if (taskQty === taskComplete) {
        return {
          ...task,
          isCompleted: false
         }
      }}
  return task;
}) 
setItems(newItems);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleRemove = (taskId) => {
    const newItems = items.filter(task => task.id !== taskId)
    newItems.splice(taskId, 1);
    setItems(newItems);
    
  };

  return (
    <div className="todo-main">
      <h1>TODO</h1>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          onChange={onChangeTitle}
          placeholder="Create a new todo..."
          value={title}
        ></input>
        <button title="Add todo" className="btn">
          <AiOutlinePlusCircle />
        </button>
      </form>
      
      <TodoList text={items}
      showDate={dateInfos} 
      onRemove={handleRemove} 
      onComplete={handleCheck}
      onCompleteAll={handleCheckAll}
     />
    </div>
  );
};

export default Todo;
