import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
};

// Add the required types and props
export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={classNames('TodoInfo',
          { 'TodoInfo--completed': todo.completed === true })}
      >
        <TodoInfo todo={todo} />
      </article>
    ))}
  </section>
);
