import React from 'react'
import { AiOutlinePlusCircle}  from 'react-icons';
const Todo = () => {
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <div className='input-container'>
            <input placeholder='Create a new todo...'></input>
            <button className='btn'><AiOutlinePlusCircle /></button>
        </div>
    </div>
  )
}

export default Todo