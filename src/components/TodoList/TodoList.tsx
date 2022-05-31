import React from 'react';
import { FullTodo } from '../../react-app-env';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  todos: FullTodo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <div key={todo.id} className="notification is-link is-light">
        <li>
          <TodoInfo todo={todo} />
        </li>
      </div>
    ))}
  </ul>
);

export default TodoList;
