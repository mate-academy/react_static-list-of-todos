import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

// Add the required types and props
export const TodoList: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <section className="TodoList">
        <TodoInfo todo={todo} key={todo.id} />
      </section>
    ))}

  </div>
);
