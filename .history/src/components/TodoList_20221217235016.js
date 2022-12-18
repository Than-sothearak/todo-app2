import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
export const TodoList = (props) => {
  return (
    <ul className='container-list'>
      {props.text.map(item => (
        <div className='list-index'>
        <div className='text-container'>
        <input className='radio'type='radio'></input>
          <li>{item.text}</li>
        </div>
          <button title="Remove"className='btn-minus'><AiOutlineMinusCircle /></button>
      </div>
     
))};
            
            <div className='footer-container'>
                <p>items left</p>
            </div>
        </ul>
  )
}
