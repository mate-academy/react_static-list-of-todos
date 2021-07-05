import React from 'react';
import {todos} from '../todos';
import {users} from '../users';
import TodoItem from './TodoItem'
import User from './User'

function TodoList() {
  const todoList = [];
  todos.forEach(todoItem => {
    const user = users.find(user => user.id == todoItem.userId);
    todoList.push(<TodoItem user={user} title={todoItem.title} completed={todoItem.completed} key={todoItem.title}/>)
  })
  return (
   <table>
     <tbody>
       {todoList}
     </tbody>
   </table>
  )
}

export default TodoList;
