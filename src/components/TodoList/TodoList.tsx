import React from 'react';
import './TodoList.scss';
import { Todos } from '../../react-app-env';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todos[];
};

const TodoList:React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className="todo-list__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
