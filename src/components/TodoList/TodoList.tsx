import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';
// Add the required types and props
type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => (
  <>
    <section className="TodoList">
      {todos.map((el) => (
        <TodoInfo todo={el} key={el.id} />
      ))}
    </section>
  </>
);
