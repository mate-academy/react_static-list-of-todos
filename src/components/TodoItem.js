import React from 'react';
import {users} from './users';

function TodoItem (props) {
    const user = users.find(user => user.id === props.userId);
    return (
        <tr><td>{user.name}</td><td>{props.item.title}</td><td>{props.item.completed ? `completed` : `not completed`}</td></tr>
    )

}

export default TodoItem;
