import React from 'react';
import { TodosInfo } from '../../Types/Todo';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: TodosInfo[],
};

const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul className="list">
    {todos.map(todo => (
      <li
        className={todo.completed
          ? 'list__item'
          : 'list__item list__item--not-ready'}
        key={`mailto:${todo.id}`}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
