import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Todos = {
  todos: Todo[];
};

export const TodoList: React.FC<Todos> = ({ todos }) => (
  <section className="TodoList">

    {todos.map(todo => (
      <TodoInfo todo={todo} />

    ))}
  </section>
);
