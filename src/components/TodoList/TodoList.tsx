// Add the required types and props
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Prop = {
  todos: Todo[];
};

export const TodoList: React.FC<Prop> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (<TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
