import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  todosServer: Todo[];
};

function capitalized(string: string): string {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export const TodoList: React.FC<Props> = ({ todosServer = [] }) => (
  <section className="TodoList">
    {todosServer.map((todo) => (
      <article
        key={todo.id}
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': todo.completed,
          },
        )}
      >
        <TodoInfo title={capitalized(todo.title)} />
        {todo.user
          && <UserInfo name={todo.user.name} email={todo.user.email} />}
      </article>
    ))}
  </section>
);
