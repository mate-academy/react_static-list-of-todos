import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(({
      id,
      title,
      completed,
      user,
    }) => {
      if (user) {
        return (
          <li key={id}>
            <TodoInfo
              title={title}
              complited={completed}
              user={user}
            />
          </li>
        );
      }

      return user;
    })}
  </ul>
);
