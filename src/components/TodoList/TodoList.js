import React from 'react';
import {todos} from '../../data/todos';
import {users} from '../../data/users';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';

function TodoList() {
  const usersObject = users.reduce(
    (people, person) => ({
      ...people, [person.id]: person
    }),
    {}
  );
  const todoList = todos.map(item => {
    return <TodoItem
      key = {item.id}
      title = {item.title}
      completed = {item.completed}
      userInfo = {usersObject[item.userId]}
    />;
  });
  return (
    <div className="container">
      {todoList}
    </div>
  );
}

export default TodoList;
