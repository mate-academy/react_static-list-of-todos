import classNames from 'classnames';
import { Todo } from '../types/interfaces';
import { UserInfo } from './UserInfo';

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => {
  return user
    && (
      <>
        <li className={classNames('TodoList__item', {
          'TodoList__item--g': completed,
          'TodoList__item--r': !completed,
        })}
        >
          <h2 className="TodoList__title">{title}</h2>
          <p className="TodoList__status">
            {
              completed
                ? 'Congratulations task is completed!!!'
                : 'Task is not completed'
            }
          </p>
          <div className="TodoList__userInfo">
            <UserInfo name={user.name} email={user.email} />
          </div>
        </li>
      </>
    );
};

type Props = Pick<Todo, 'title' | 'completed' | 'user'>;
