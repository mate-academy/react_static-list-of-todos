import React from 'react';
import './TodoList.scss';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

const Todolist: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li className="list-item">
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
