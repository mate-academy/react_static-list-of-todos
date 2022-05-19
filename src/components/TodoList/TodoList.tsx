import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li key={todo.id} className="list--item">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
