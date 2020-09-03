import React from 'react';

import todos from '../api/todos';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <div className="container">
      <div className="row">
        {todos.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            completed={item.completed}
            userId={item.userId}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
