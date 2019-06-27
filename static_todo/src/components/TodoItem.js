import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const {title, completed} = props
    return (
        <>
            <div className={completed ? "yes" : "no"}>{title}</div>
            <div className="status"> {`${props.completed ? "yes" : "no"}`}</div>

        </>

    );
}

export default TodoItem;
