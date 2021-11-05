import { PreparedTodo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './Todolist.scss';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const Todolist: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="TodoList">
    {preparedTodos.map((todo: PreparedTodo) => {
      return (
        <li className="TodoList__item" key={todo.id}>
          <TodoInfo {...todo} />
        </li>
      );
    })}
  </ul>
);
