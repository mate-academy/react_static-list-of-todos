import React from 'react';
import TodoItem from './TodoItem';
import {todos} from './todos';
import {users} from './users';
import '../css/todoList.css'

function TodoList() {
  const todosComponents = [];
  for (const todoItem of todos) {
    let name;
    let email;
    for(const user of users) {
      if(todoItem.userId === user.id){
        name = user.name;
        email = 'mailto:' + user.email;
        break;
      }
    }
    let completed = todoItem.completed ? 'completed' : 'not completed';
           
    todosComponents.push(
      <TodoItem id = {todoItem.id}
        title = {todoItem.title}
        name = {name}
        email = {email}
        isComplete = {completed}
        key = {todoItem.id}
       />
    );
  }

  return(
    <table className='table'>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todosComponents}
      </tbody>
    </table>
  )
}

export default TodoList;
