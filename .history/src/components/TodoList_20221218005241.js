import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const TodoList = ({ text }) => {
  return (
    <ul className="container-list">
      {text.map((item) => (
        <div key={item.id} className="list-index">
          <div className="text-container">
            <input className="radio" type="radio"></input>
            <li >{item.text} {item.num}</li>
          </div>
          <button title="Remove" className="btn-minus">
            <AiOutlineMinusCircle />
          </button>
        </div>
      ))}
       <div className="footer-container">
        <p>items left</p>
      </div>
    </ul>
  );
};
