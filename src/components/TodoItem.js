import React from 'react';
import User from './User';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <div className='todo-item'>
            <div className='task'>
                {props.title}
            </div>
            <User  user = {props.user}/>
        </div>
    );
}

export default TodoItem;