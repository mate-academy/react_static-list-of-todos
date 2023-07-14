import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodosList = {
  todos: Todo[];
};

export const TodoList: React.FC<TodosList> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(
        todo => (
          <TodoInfo todo={todo} key={todo.id} />
        ),
      )}
    </section>
  );
};
