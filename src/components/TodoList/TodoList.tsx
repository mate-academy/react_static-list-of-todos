import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {!!todos.length && todos.map((item: Todo) => (
        <li><TodoInfo todo={item} key={item.id} /></li>
      ))}
    </ul>
  </section>
);
