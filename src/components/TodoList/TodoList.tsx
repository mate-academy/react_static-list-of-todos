import { FC } from 'react';
import { TodoUser } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  todos: TodoUser[]
}

export const TodoList: FC<Props> = ({ todos }) => (
  <ul>
    {
      todos.map(todo => (
        <li key={todo.index}>
          <div>
            <TodoInfo
              title={todo.title}
              completed={todo.completed}
              user={todo.user}
            />
          </div>
          {todo.user && (
            <div>
              <UserInfo
                name={todo.user.name}
                email={todo.user.email}
              />
            </div>
          )}
        </li>
      ))
    }
  </ul>
);
