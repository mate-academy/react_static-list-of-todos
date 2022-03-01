import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todoData: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todoData } = props;

  return (
    <ul className="todo-list">
      {
        todoData.map(todo => (
          <li
            className={classNames(
              'todo-list__item',
              {
                'todo-list__item--completed': todo.completed,
              },
            )}
            key={todo.id}
          >
            <TodoInfo todoItem={todo} />
          </li>
        ))
      }
    </ul>
  );
};
