import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={
          (!todo.completed)
            ? 'TodoInfo TodoInfo--completed'
            : 'TodoInfo'
        }
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </article>
    ))}
  </section>
);
