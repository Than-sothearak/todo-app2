import React, { useState } from 'react';
import { AiOutlinePlusCircle}  from 'react-icons/ai';
import { TodoList } from './TodoList';


const Todo = () => {
    const [title, setTitle] = useState('');

    const [items, setItems] = useState([]);
  
    const AddTask = text => {
      setItems([
        ...items,
        {
          id: crypto.randomUUID(),
          num: items.length +1,
          text: text,
          isComplete: false
        }
      ]);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length === 0) {
            alert('sd')
        }
        AddTask(title)
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
        <TodoList key={items.id} text={items}/>
    </div>
  )
}

export default Todo