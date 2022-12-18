import React from 'react'

export const TodoList = () => {
  return (
    <ul className='container-list'>
            <div className='list-index'>
                <input className='radio'type='radio'></input>
                <li>This is item 1</li>
            </div>
            <div className='list-index'>
                <input className='radio'type='radio'></input>
                <li>This is item 1</li>
            </div>
            <div className='footer-container'>
                <p>items left</p>
            </div>
        </ul>
  )
}
