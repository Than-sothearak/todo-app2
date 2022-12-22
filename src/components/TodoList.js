import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TodoList = ({
  inputData,
  onRemove,
  onComplete,
  onCompleteAll,
  showDate,
}) => {
 
  const taskQty = inputData.length;
  const taskComplete = inputData.filter((task) => task.isCompleted).length;
  
  const reRender = () => {
    if (taskQty === taskComplete) {
      return 'Unmark all'
    } else {
      return 'Mark all as complete'
    }
  }
  return (
    <ul className="container-list">
      <div className="list-bar">
        <p>
          Create Task<span>{taskQty}</span>
        </p>
        <p className="complete">
          Complete
          <span>
            {taskComplete} of {taskQty}
          </span>
        </p>
      </div>
      {inputData.map((item,) => (
        <div key={item.id} className="list-container">
          <div className="text-container">
            <input
              title="Mark as complete"
              className="check-box"
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => onComplete(item.id)}
            ></input>
            <div>
              <li className="li-info">{item.text}</li>
              <li className="li-info-date">{showDate()}</li>
            </div>
          </div>
          <button
            onClick={() => {
              onRemove(item.id);
            }}
            title="Remove"
            className="btn-minus">
          
            <RiDeleteBin5Fill />
          </button>
        </div>
      ))}

      <div className="footer-container">
        <button onClick={onCompleteAll}>{reRender()}</button>
        <p>{taskQty - taskComplete} items left</p>
      </div>
    </ul>
  );
};
