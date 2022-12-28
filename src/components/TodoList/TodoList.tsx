import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type List = {
  elements: Todo[];
};

export const TodoList: React.FC<List> = ({ elements }) => (
  <section className="TodoList">
    {elements.map((todo) => (
      <TodoInfo
        key={todo.id}
        element={todo}
      />
    ))}
  </section>
);
