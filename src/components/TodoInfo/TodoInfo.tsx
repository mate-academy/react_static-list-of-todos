import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => {
  const classNameTodo = `TodoInfo ${completed ? 'TodoInfo--done' : ''}`;

  return (
    <li className={classNameTodo}>
      <h2 className="TodoInfo__title">{`Todo: ${title}`}</h2>
      <p className="TodoInfo__status">
        {(user === null)
          ? 'User not choosed'
          : (
            <UserInfo
              id={user.id}
              name={user.name}
              email={user.email}
            />
          )}
        {`Status: ${(completed) ? 'Done' : 'Not done'}`}
      </p>
    </li>
  );
};
