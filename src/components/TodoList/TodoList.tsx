import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type ListOfTodo = {
  todos: Todo[];
};

export const TodoList: React.FC<ListOfTodo> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
