import React, { useState } from 'react';
import { AiOutlinePlusCircle}  from 'react-icons/ai';


const Todo = ({onAdd}) => {
    const [title, setTitle] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length === 0) {
            alert('sd')
        }
        onAdd(title)
    }
    const onChangeTitle = (e) => {
       setTitle(e.target.value);
    }
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <form onSubmit={handleSubmit} className='input-container'>
            <input onChange={onChangeTitle}p laceholder='Create a new todo...'></input>
            <button title="Add todo" className='btn'><AiOutlinePlusCircle /></button>
        </form>
        
    </div>
  )
}

export default Todo