import React from 'react';
import TodoItem from './TodoItem'
import User from './User'
import { users } from './users';
import { todos } from './todos';

const listOfTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
})

function TodoList() {
  const list = listOfTodos.map(todo =>
    <div className="todo-list__item">
      <TodoItem
        key={todo.id}
        item={todo}
        user={todo.user}/>
      <User user={todo.user}/>
    </div>
  )

  return (
    <div className="todo-list">
      {list}
    </div>
  )
}

export default TodoList
