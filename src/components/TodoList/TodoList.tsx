import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList:React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </article>
    ))}
  </section>
);
