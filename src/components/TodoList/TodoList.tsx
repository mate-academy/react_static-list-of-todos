import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todoItems: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todoItems } = props;

  todoItems.sort((x, y) => {
    if (x.user && y.user) {
      return x.user.name.localeCompare(y.user.name)
        || x.title.localeCompare(y.title);
    }

    return -1;
  });

  return (
    <ul className="todo-list">
      {todoItems.map(todo => (
        <li className="todo-list__item" key={todo.id}>
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
