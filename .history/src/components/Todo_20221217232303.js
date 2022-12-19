import React, { useState } from 'react';
import { AiOutlinePlusCircle}  from 'react-icons/ai';
import { TodoList } from './TodoList';

const Todo = () => {
    const [title, setTitile] = useState('');
    
    const handleAdd = (e) => {
       e.preventDefaul(e);
       setTitile(e.target.value);
    }
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <form className='input-container'>
            <input placeholder='Create a new todo...'></input>
            <button title="Add todo" className='btn'><AiOutlinePlusCircle /></button>
        </form>
        <TodoList />
    </div>
  )
}

export default Todo