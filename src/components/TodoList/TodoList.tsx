import React from 'react';
import { FullTodo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: FullTodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todo">
    <ul className="todo_list">
      {
        todos.map(todo => (
          <li className="todo_item" key={todo.id}>
            {todo.user && <TodoInfo todo={todo} />}
          </li>
        ))
      }
    </ul>
  </div>
);
