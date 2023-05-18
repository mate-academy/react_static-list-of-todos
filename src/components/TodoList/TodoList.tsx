import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type PropsTodoList = {
  todos: Todo[];
};

export const TodoList: React.FC<PropsTodoList> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
