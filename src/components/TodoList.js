import React from 'react';
import TodoItem from './TodoItem';
import { todos } from '../todos';
import { users } from '../users';

function TodoList() {
    const usersObj = users.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
    },{});

    const todosComponents = todos.map(todoItem => {
        return <TodoItem title={todoItem.title} user={usersObj[todoItem.userId]} key={todoItem.id}/>
    });
    return todosComponents;
}

export default TodoList;