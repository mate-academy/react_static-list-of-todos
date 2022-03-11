import React from 'react';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/Todo';
import './TodoList.scss';

type Props = {
  todoList: Todo[],
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="TodoList">
    {
      todoList.map(({ id, title, completed }) => (
        <li key={id}>
          <TodoItem
            title={title}
            completed={completed}
          />
        </li>
      ))
    }
  </ul>
);
