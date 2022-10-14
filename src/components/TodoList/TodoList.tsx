import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

import './Todolist.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList d-flex flex-column align-items-center">
    {todos.map(todo => (
      <li className="w-100" style={{ maxWidth: '25rem' }}>
        <TodoInfo todo={todo} key={todo.id} />
      </li>
    ))}
  </ul>
);
