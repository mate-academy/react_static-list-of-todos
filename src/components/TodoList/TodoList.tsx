// Add the required types and props
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type TodosType = {
  todos: Todo[];
};

export const TodoList: React.FC<TodosType> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
