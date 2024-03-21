// Add the required types and props
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(item => (
        <TodoInfo key={item.id} todo={item} />
      ))}
      ;
    </section>
  );
};
