import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { ToDo } from '../../types/ToDo';
import './TodoList.scss';

type Props = {
  todos: ToDo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <>
        <li
          className={classNames('todo-list__item', { active: todo.completed })}
          key={todo.id}
        >
          <TodoInfo todo={todo} />
        </li>
      </>
    ))}
  </ul>
);
