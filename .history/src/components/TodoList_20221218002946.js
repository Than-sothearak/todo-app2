import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const TodoList = ({ text }) => {
  return (
    <ul className="container-lists">
      {text.map((item) => (
        <div className="list-index">
          <div className="text-container">
            <input className="radio" type="radio"></input>
            <li key={item.id}>{item.text} </li>
          </div>
          <button title="Remove" className="btn-minus">
            <AiOutlineMinusCircle />
          </button>
        </div>
      ))}
    </ul>
  );
};
