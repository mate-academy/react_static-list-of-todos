import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={classNames('TodoInfo', {
          'TodoInfo--completed': todo.completed,
        })}
      >
        <TodoInfo todo={todo} key={todo.id} />
      </article>
    ))}
  </section>
);
