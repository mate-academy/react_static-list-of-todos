import { ITodo } from '../../types/Interface';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: ITodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        key={todo.id}
        className="todo__items"
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
