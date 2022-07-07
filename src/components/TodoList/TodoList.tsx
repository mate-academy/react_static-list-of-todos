import React from 'react';
import './TodoList.scss';

import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todos">
    <ul className="todos__list">
      {todos.map(todo => (
        <li className="todos__item" key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
