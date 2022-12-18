import React from 'react'
import { AiOutlinePlusCircle}  from 'react-icons/ai';

const Todo = () => {
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <form className='input-container'>
            <input placeholder='Create a new todo...'></input>
            <button className='btn'><AiOutlinePlusCircle /></button>
        </form>
        
    </div>
  )
}

export default Todo