// import { props } from 'cypress/types/bluebird';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const Todolist: React.FC<Props> = (props) => {
  const {
    preparedTodos,
  } = props;

  return (
    <ul className="todo-list">
      {preparedTodos.map((todo) => (
        <li
          className="todo-list__item"
          key={todo.id}
        >
          <TodoInfo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))}
    </ul>
  );
};
