import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const TodoList = ({ text, onRemove, onComplete }) => {
  const taskQty = text.length;
  const taskComplete = text.filter(task => task.isCompleted).length;

  return (
    <ul className="container-list">
      <div className="info-bar">
        <p>Create Task<span>{taskQty}</span></p>
        <p>Complete<span>{taskComplete} of {taskQty}</span></p>
      </div>
      {text.map((item, taskId) => (
        <div key={item.id} className="list-index">
          <div className="text-container">
            <input title="Mark as complete" 
                   className="radio" type="checkbox" 
                  //  checked={item.isCompleted}
                   onChange={() => onComplete(taskId)}>
                   
            </input>
            <li >{item.text}</li>
          </div>
          <button onClick={() =>onRemove(taskId)}title="Remove" className="btn-minus">
            <AiOutlineMinusCircle />
          </button>
        </div>
      ))}
       <div className="footer-container">
        <p>{taskQty} items left</p>
      </div>
    </ul>
  );
};
