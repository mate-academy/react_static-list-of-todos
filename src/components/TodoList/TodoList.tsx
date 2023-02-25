import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Todolist = {
  todos?: Todo[];
};

export const TodoList: React.FC<Todolist> = ({ todos }) => (
  <section className="TodoList">
    {todos && todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
