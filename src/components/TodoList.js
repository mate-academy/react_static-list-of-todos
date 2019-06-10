import React from 'react';
import {todos} from '../data/todos';
import {users} from '../data/users';
import User from './User';
import TodoItem from './TodoItem';
import '../style/TodoList.css'

function TodoList() {
 
  return todos.map(todosItem => {
    const user = users.find(userItem => userItem.id === todosItem.userId);
    return ( 
      <article key={todosItem.id}>
        <TodoItem title={todosItem.title}/>
        <User name={user.name} email={user.email}/>
      </article>); 
  })
}

export default TodoList;
