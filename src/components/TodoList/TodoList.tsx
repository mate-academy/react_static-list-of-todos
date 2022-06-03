import { FC } from 'react';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

interface Props {
  preparedTodos: PreparedTodos[];
}

export const TodoList: FC<Props> = ({ preparedTodos }) => {
  return (
    <ul className="todo-list">
      {preparedTodos.map(todo => {
        return (
          <li key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
