import React from 'react'

const Todo = () => {
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <div className='input-container'>
            <input placeholder='Create a new todo...'></input>
            <button className='btn'>+</button>
        </div>
    </div>
  )
}

export default Todo