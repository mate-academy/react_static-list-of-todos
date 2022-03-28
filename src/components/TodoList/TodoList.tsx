import { FC } from 'react';
import { Todos } from '../../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

type Props = {
  todos: Todos[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li key={todo.id} className="TodoList__item">
          <TodoInfo {...todo} />
          {todo.user && <UserInfo {...todo.user} />}
        </li>
      ))}
    </ul>
  );
};
