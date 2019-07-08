import React from 'react';

import TodoItem from './TodoItem';

import todos from '../api/todos';

const TodoList = () => {
  const todoItems = todos.map(item => <TodoItem key={item.id} item={item} />);
  return (
    <div className="TodoList">
      {todoItems}
    </div>
  );
};

export default TodoList;
