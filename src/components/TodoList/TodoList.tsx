import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  preparedTodos: PreparedTodo[]
}

export const TodoList : React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list">
    {
      preparedTodos.map((todo: PreparedTodo) => (
        <React.Fragment key={todo.id}>
          <TodoInfo todo={todo} />
        </React.Fragment>
      ))
    }
  </ul>
);
