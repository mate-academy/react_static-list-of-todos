import React from 'react';
import Todo from '../Todo/Todo';

function TodosList(props) {
  const { preparedTodos } = props;

  return (
    <div className="container">
      <div className="row">
        {preparedTodos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodosList;
