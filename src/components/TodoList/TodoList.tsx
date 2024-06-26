import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Proms = {
  todos: Todo[]
};

export const TodoList = ({ todos }: Proms) => (
  <section className="TodoList">
    {todos.map(todo => <TodoInfo todo={todo} key={todo.id} />)}
  </section>
);
