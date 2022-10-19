import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todosAr: Todo[],
};

export const TodoList: React.FC<Props> = ({ todosAr }) => (
  <section className="TodoList">
    {todosAr.map((todo) => (
      <article
        className={classNames(
          'TodoInfo',
          { 'TodoInfo--completed': todo.completed },
        )}
        key={todo.id}
      >
        <TodoInfo {...todo} />
      </article>
    ))}

  </section>
);
