import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const TodoList = () => {
  return (
    <ul className="container-list">
      {items.map((item) => (
        <div className="list-index">
          <div className="text-container">
            <input className="radio" type="radio"></input>
            <li key={item.id}>{item.text}</li>
          </div>
          <button title="Remove" className="btn-minus">
            <AiOutlineMinusCircle />
          </button>
        </div>
      ))}
      ;
      <div className="footer-container">
        <p>items left</p>
      </div>
    </ul>
  );
};
