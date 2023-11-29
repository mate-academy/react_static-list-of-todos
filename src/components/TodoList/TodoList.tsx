import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

// Add the required types and props
type Props = {
  todos: Todo[]
};

export const TodoList = ({ todos }: Props) => (
  <section className="TodoList">
    {todos.map(todo => (<TodoInfo key={todo.id} todo={todo} />))}
  </section>
);
