import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
export const TodoList = () => {
  return (
    <ul className='container-list'>
            <div className='list-index'>
                <input className='radio'type='radio'></input>
                <li>Often in typography (and always in computer programming)ten in typography (and always in computer programming</li>
                <button className='btn'><AiOutlineMinusCircle /></button>
            </div>
            <div className='list-index'>
                <input className='radio'type='radio'></input>
                <li>This is item 1</li>
                <button className='btn'><AiOutlineMinusCircle /></button>
            </div>
            <div className='list-index'>
                <input className='radio'type='radio'></input>
                <li>This is item 1</li>
                <button className='btn'><AiOutlineMinusCircle /></button>
            </div>
           
            <div className='footer-container'>
                <p>items left</p>
            </div>
        </ul>
  )
}
