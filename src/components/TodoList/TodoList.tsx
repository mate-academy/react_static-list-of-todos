// Add the required types and props
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodoL = {
  todos: Todo[]
};

export const TodoList: React.FC<TodoL> = ({ todos }) => (
  <section className="TodoList">
    { todos.map(todo => (
      <TodoInfo key={todo.id} props={todo} />
    ))}
  </section>
);
