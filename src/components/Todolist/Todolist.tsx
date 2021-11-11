import { PreparedTodo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './Todolist.scss';

type Props = {
  todos: PreparedTodo[];
};

export const Todolist: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todo: PreparedTodo) => {
      return (
        <li className="TodoList__item" key={todo.id}>
          <TodoInfo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      );
    })}
  </ul>
);
