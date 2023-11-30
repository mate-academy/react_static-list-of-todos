import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodoListType = {
  todos: Todo[];
};

export const TodoList: React.FC<TodoListType> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
