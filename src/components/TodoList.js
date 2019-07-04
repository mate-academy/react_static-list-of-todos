import React from 'react';

import TodoItem from './TodoItem';
import User from './User';

import todos from '../api/todos';
import users from '../api/users';

const Main = {
  width: '300px',
  margin: '0 auto',
  bgColor: 'silver',
  borderRadius: '2px',
  boxShadow: '0 10px 6px -6px #777',
  border: '1px solid silver',
};

const todosMap = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function TodoList() {
  const res = todosMap.map(todo => (
    <main key={todo.id} style={Main}>
      <TodoItem item={todo} />
      <User user={todo.user} />
    </main>
  ));

  return (
    <div className="todo-list">
      {res}
    </div>
  );
}
export default TodoList;
