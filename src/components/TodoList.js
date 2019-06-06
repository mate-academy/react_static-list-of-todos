import React from 'react';
import TodoItem from './TodoItem';
import { users } from '../state/users';
import { todos } from '../state/todos';

export default function TodoList() {
    const userMap = users.reduce((acc, user) => ({...acc, [user.id]: user,}), {});
    const items = todos.map(item => <TodoItem title={item.title}
                                              completed={item.completed}
                                              userId={item.userId}
                                              key={item.id}
                                              userMap={userMap}/>);

    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Completed</th>
                <th>User</th>
            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>
        </table>
    )
}
