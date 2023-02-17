import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface ITodos {
  todos: Todo[];
}

export const TodoList:React.FC<ITodos> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
