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
        isCompleted: true
      },
    ]);
  };

  const handleCheck = (e) => {
       let checked = e.target.checked;
       setItems(items.id ==='27c51449-9701-4285-a5b1-27116365d3f8');
       alert("checked")
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
      onComplete={handleCheck} />
    </div>
  );
};

export default Todo;
