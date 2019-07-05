import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Complited</th>
          <th>Title</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(item => (
          <TodoItem todo={item} />
        ))}
      </tbody>

    </table>
  );
}

export default TodoList;
