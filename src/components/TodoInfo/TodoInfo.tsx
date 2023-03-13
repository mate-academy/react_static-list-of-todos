// Add the required types and props
import todosFromServer from '../../api/todos';
import usersFromServer from '../../api/users';

import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

import { UserInfo } from '../UserInfo';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

export const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article
    className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
