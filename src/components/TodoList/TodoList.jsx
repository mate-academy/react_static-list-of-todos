import React from 'react';
import './todolist.scss';
import todos from '../../api/todos';
import users from '../../api/users';
import { Todo } from '../Todo';

todos.forEach(item => (item.userId = users.find(user => user.id === item.userId)));
const preparedTodos = [...todos];
console.log(preparedTodos)

export function TodoList() {
  return (
    <>
      <div className="TodoList">
        {preparedTodos.map(item => (
          <div key={item.id}>
            <Todo {...item} />
            </div>
          ))}
      </div>
    </>
  );
}
