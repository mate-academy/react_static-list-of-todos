import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[],
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <div>
    {preparedTodos.map(todo => (
      <React.Fragment key={todo.id}>
        <TodoInfo todo={todo} />
      </React.Fragment>
    ))}
  </div>
);

export default TodoList;
