import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todo }) => {
  console.log({ todo });
  const items = todo.map(item => (
    <TodoItem itemData={item} />
  ));
  return (
    <div>
      {items}
    </div>
  );
};

export default TodoList;
