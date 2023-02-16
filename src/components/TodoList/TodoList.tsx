import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {
      todos && todos.map((item: Todo) => <TodoInfo todo={item} key={item.id} />)
    }
  </section>
);
