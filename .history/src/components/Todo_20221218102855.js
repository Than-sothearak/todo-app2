import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      return alert("Please input value!");
    }
    AddTask(title);
    setTitle("");

  };
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

  const handleCheckAll = (taskId) => {
    
    const newItems = items.map(task => {
      if(taskId) {
       return {
        ...task,
        isCompleted: !task.isCompleted
       }
  }
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
      onRemove={handleRemove} 
      onComplete={handleCheck}
      onCompleteAll={handleCheckAll}
     />
    </div>
  );
};

export default Todo;
