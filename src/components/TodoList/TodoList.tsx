import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todo: Todo[],
};

export const TodoList: React.FC<Props> = ({ todo }) => (
  <section className="TodoList">
    {todo.map(Item => <TodoInfo tododetails={Item} key={Item.id} />)}
  </section>
);
