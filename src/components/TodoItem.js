import React from 'react';
import { TodoUser } from "./TodoUser";

export function TodoItem(props) {
    const { userId, userMap, completed, title }  = props;
    const { name, username, email, phone, } = userMap[userId];

    return (
        <tr>
            <td>
                <h5>{title}</h5>
            </td>
            <td>
                <span>{completed ? 'Yes':'No'}</span>
            </td>
            <td>
                <TodoUser name={name} username={username} email={email} phone={phone}/>
            </td>
        </tr>
    );
}