import React from 'react';
import {todos} from './todos';
import {users} from './users';
import User from './User';
import TodoItem from './TodoItem';
import './TodoList.css'

function TodoList() {
 
  return todos.map(todosItem => {
    const user = users.find(userItem => userItem.id === todosItem.userId);
    return ( 
      <article key={todosItem.title}>
        <TodoItem title={todosItem.title}/>
        <User name={user.name} email={user.email}/>
      </article>); 
  })
}

export default TodoList;
