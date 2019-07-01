import React from 'react';
import TodoItem from './TodoItem'
import User from './User'
import { users } from './users';
import { todos } from './todos';

function TodoList() {
  const list = todos.map(todo => users.map(user => {
      if (user.id === todo.userId) {
        return (
          <div className="todo-list__item">
            <TodoItem key={todo.id} item={todo} user={user}/> 
            <User key={user.id} user={user}/>
          </div>
        )
      }
    })
  )
    
  return (
    <div className="todo-list">
      {list}
    </div>
  )
}

export default TodoList