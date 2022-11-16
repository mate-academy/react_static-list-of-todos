import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todo: Array<Todo>;
};

export const TodoList: React.FC<Props> = ({ todo }) => (
  <section className="TodoList">
    {todo.map(item => (
      <>
        <TodoInfo key={item.id} todo={item} />
      </>
    ))}
  </section>
);
