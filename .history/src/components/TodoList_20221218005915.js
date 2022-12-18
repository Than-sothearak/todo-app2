import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const TodoList = ({ text, onRemove }) => {
  return (
    <ul className="container-list">
      {text.map((item, index) => (
        <div key={item.id} className="list-index">
          <div className="text-container">
            <input title="Mark as complete" className="radio" type="radio"></input>
            <li >{item.text} {item.num}</li>
          </div>
          <button onClick={onRemove(index)}title="Remove" className="btn-minus">
            <AiOutlineMinusCircle />
          </button>
        </div>
      ))}
       <div className="footer-container">
        <p>{text.length } items left</p>
      </div>
    </ul>
  );
};
