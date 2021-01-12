import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    props.preparedTodos.map(item => (
      <TodoItem key={item.id} {...item} />
    ))

  );
}

export default TodoList;
