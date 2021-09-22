import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todoList: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todoList } = props;

  return (
    <ul className="todo-list">
      {todoList.map(todoItem => (
        <li key={todoItem.id} className="todo-list__item">
          <TodoInfo todo={todoItem} />
        </li>
      ))}
    </ul>
  );
};
