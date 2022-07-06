import React from 'react';
import { Todo } from '../../types/Todo';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo [],
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map(preparedTodo => (
      <TodoInfo todo={preparedTodo} key={preparedTodo.id} />
    ))}
  </ul>
);

export default TodoList;
