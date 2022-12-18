import React, { useState } from 'react';
import { AiOutlinePlusCircle}  from 'react-icons/ai';
import { TodoList } from './TodoList';

const Todo = () => {
    const [title, setTitle] = useState('');
    
    const handleAdd = (e) => {
       e.preventDefaul(e);
       setTitle(e.target.value);
    }
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <form onChange={handleAdd}className='input-container'>
            <input placeholder='Create a new todo...'></input>
            <button title="Add todo" className='btn'><AiOutlinePlusCircle /></button>
        </form>
        <TodoList />
    </div>
  )
}

export default Todo