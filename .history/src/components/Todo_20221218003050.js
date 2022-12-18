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
            return alert('Please input value!')
        }
        AddTask(title);
        setTitle('');
    }
    const onChangeTitle = (e) => {
       setTitle(e.target.value);
    }
  return (
    <div className='todo-main'>
        <h1>TODO</h1>
        <form onSubmit={handleSubmit} className='input-container'>
            <input onChange={onChangeTitle} placeholder='Create a new todo...'></input>
            <button title="Add todo" className='btn'><AiOutlinePlusCircle /></button>
        </form>
        <TodoList text={items}/>
        <div className="footer-container">
        <p>num={items.num}items left</p>
      </div>
    </div>
  )
}

export default Todo