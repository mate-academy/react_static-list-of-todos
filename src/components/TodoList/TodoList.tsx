import './TodoList.scss';

import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {
      todos.map(todo => (
        <li key={todo.id} className="list__item">
          <TodoInfo todo={todo} />
          {
            todo.user
              ? (
                <UserInfo user={todo.user} />
              )
              : ''
          }
        </li>
      ))
    }
  </ul>
);
