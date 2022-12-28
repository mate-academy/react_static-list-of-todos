import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

// Add the required types and props
type Todos = {
  todosList: Todo[];
};
export const TodoList: React.FC<Todos> = ({ todosList }) => (
  <section className="TodoList">
    {todosList.map(todo => (
      <TodoInfo todoItem={todo} key={todo.id} />
    ))}
  </section>
);
