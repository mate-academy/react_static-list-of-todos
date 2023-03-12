import { TodoInfo } from '../TodoInfo';
import todosFromServer from '../../api/todos';
import usersFromServer from '../../api/users';

import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

export const TodoList: React.FC = () => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article
          className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}
          key={todo.id}
        >
          <TodoInfo todos={todo} />
          {todo.user && (
            <a className="UserInfo" href={`mailto:${todo.user.email}`}>
              {todo.user.name}
            </a>
          )}
        </article>
      ))}
    </section>
  );
};
