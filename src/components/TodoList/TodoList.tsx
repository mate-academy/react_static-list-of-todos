import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {!!todos.length && todos.map((item: Todo) => (
        <li key={item.id}><TodoInfo todo={item} /></li>
      ))}
    </ul>
  </section>
);
