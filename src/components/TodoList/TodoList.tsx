import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(task => (
      <li key={task.id}>
        <TodoInfo todo={task} />
      </li>
    ))}
  </ul>
);

export default TodoList;
