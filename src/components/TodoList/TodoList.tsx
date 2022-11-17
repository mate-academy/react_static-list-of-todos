import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[],
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      <section className="TodoList">
        { todos.map(item => (
          <li key={item.id}>
            <TodoInfo todo={item} />
          </li>
        )) }
      </section>
    </ul>
  );
};
