import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((listItem) => (
      <TodoInfo key={listItem.id} todo={listItem} />
    ))}
  </section>
);
