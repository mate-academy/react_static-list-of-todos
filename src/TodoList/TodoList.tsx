import React from 'react';
import { Todo } from '../types';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[],
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <div className="TodoList">
      {preparedTodos.map(todo => <TodoInfo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
