import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ preparedTodos }) => (
  <ul className="todo-list">
      {preparedTodos.map(
        preparedTodo => <Todo {...preparedTodo} key={preparedTodo.id}/>
      )}
  </ul>
);

export default TodoList;
