import classNames from 'classnames';

import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList:React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => {
      const {
        id,
        completed,
      } = todo;

      return (
        <li
          className={
            classNames(
              'TodoInfo',
              {
                'TodoInfo--completed': completed,
              },
            )
          }
          key={id}
        >
          <TodoInfo todo={todo} />
        </li>
      );
    })}
  </ul>
);
