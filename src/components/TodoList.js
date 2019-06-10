import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = props => {
    const {
        todos,
        users,
    } = props;
    const usersMap = users.reduce((acc, user) => ({...acc, [user.id]: user}), {});
    const todosWithUsers = todos.map(todo => ({...todo, user: usersMap[todo.userId]}));
    
    return (
        <table cellSpacing={20}>
            <tbody>
                {todosWithUsers.map(todosWithUser => {
                    return (
                        <TodoItem key={todosWithUser.id} {...todosWithUser}/>
    );
})}
            </tbody>
        </table>
    );
};