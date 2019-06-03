import React from 'react';
import TodoUser from "./TodoUser";

export default function TodoItem(props) {
    const { userId }  = props;
    const user = props.userMap[userId];

    return (
        <tr>
            <td>
                <h5>{props.title}</h5>
            </td>
            <td>
                <span>{props.completed ? 'Yes':'No'}</span>
            </td>
            <td>
                <TodoUser name={user.name} username={user.username} email={user.email} phone={user.phone}/>
            </td>
        </tr>
    )
}