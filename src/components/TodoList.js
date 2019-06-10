import React from 'react';
import {todos} from './todos';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
    const todolist = [];
    for (let i = 0; i < todos.length; i++){
        todolist.push(<TodoItem item={todos[i]} userId={todos[i].userId}/>);
    }
    return (
        <table>
            <thead>
            <tr><td>list to do</td><td>user name</td><td>completed</td></tr>
            </thead>
            <tbody>
            {todolist}
            </tbody>
        </table>
    )
}

export default TodoList;
