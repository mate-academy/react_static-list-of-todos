import React from 'react';

function TodoItem(props) {
    return (
        <div>
            {`${props.title}  ${props.completed ? "yes" : "no"}`}
        </div>
    );
}

export default TodoItem;
