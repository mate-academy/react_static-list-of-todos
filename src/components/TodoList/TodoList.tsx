import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type List = {
  todos: Todo[];
};

export const TodoList: React.FC<List> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo
        key={todo.id}
        todo={todo}
      />
    ))}
  </section>
);
