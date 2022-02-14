import { FullTodo } from '../../types/FullTodo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todoList: FullTodo[];
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todo-list">
    {todoList.map(todo => (
      <li className="todo-list__item" key={todo.id}>
        <TodoInfo fullTodo={todo} />
      </li>
    ))}
  </ul>
);
