import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => (
  <section className="TodoList">
    {todos.map((todo) => <TodoInfo todo={todo} />)}
  </section>
);
