import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
// import todosFromServer from './api/todos';

type Props = {
  todos: Todo[]
};

// Add the required types and props
export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={(
          !todo.completed)
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo'}
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </article>
    ))}
  </section>
);
