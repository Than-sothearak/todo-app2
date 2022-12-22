import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TodoList } from "./TodoList";

//get items from local
const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list) {
    return JSON.parse(list);
  } 
  else {
    return [];
  }
}
const Todo = () => {
  const [items, setItems] = useState(getLocalItems());
  const [inputData, setInputData] = useState("");
  const taskQty = items.length
  const taskComplete = items.filter(task => task.isCompleted).length;
  
  //get data from user input
  const onChangeTitle = (e) => {
    setInputData(e.target.value);
  };
  //add userInput get from input to object Name: items
  const AddTask = (text) => {
    setItems([
      ...items,
      {
        id: Date.now(),
        text: text,
        isCompleted: false
      },
    ]);
  };
  
  //submit data to arrays and reset input
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData.length === 0) {
      return alert("Please input value!");
    }
    AddTask(inputData);
    setInputData("");

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

  //check if user click on check and uncheck
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
  
  //for 1 click to mark all as completed
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
  
  //remove todo list
  const handleRemove = (taskId) => {
    const newItems = items.filter(task => task.id !== taskId)
    console.log({newItems})
    setItems(newItems);
    
  };
  //add data to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
  }, [items])

 
  return (
    <div className="main-container">
      <h1>TODO</h1>
      <form className="input-container" 
            onSubmit={handleSubmit} >
        <input
          onChange={onChangeTitle}
          placeholder="Create a new todo..."
          value={inputData}>
        </input>
        <button title="Add todo" className="btn">
          <AiOutlinePlusCircle />
        </button>
      </form>
      
      <TodoList 
           inputData={items}
           showDate={dateInfos} 
           onRemove={handleRemove} 
           onComplete={handleCheck}
           onCompleteAll={handleCheckAll} />
    </div>
  );
};

export default Todo;
