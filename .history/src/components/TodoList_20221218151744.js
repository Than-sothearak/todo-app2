import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TodoList = ({
  text,
  onRemove,
  onComplete,
  onCompleteAll,
  showDate,
}) => {
  const taskQty = text.length;
  const taskComplete = text.filter((task) => task.isCompleted).length;

  return (
    <ul className="container-list">
      <div className="info-bar">
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
      {text.map((item, taskId) => (
        <div key={item.id} className="list-index">
          <div className="text-container">
            <input
              title="Mark as complete"
              className="radio"
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => onComplete(item.id)}
            ></input>
            <li className="li-info">{item.text}</li>
            <li>{showDate()}</li>
          </div>
          <button
            onClick={(e) => {
              onRemove(taskId);
            }}
            title="Remove"
            className="btn-minus"
          >
            <RiDeleteBin5Fill size={13} />
          </button>
        </div>
      ))}

      <div className="footer-container">
        <button onClick={onCompleteAll}>Mark all as complete</button>
        <p>{taskQty - taskComplete} items left</p>
      </div>
    </ul>
  );
};
