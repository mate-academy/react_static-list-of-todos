import classNames from 'classnames';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type TodoProps = {
  userId: number,
  title: string,
  completed: boolean,
  user: User | null
};

export const TodoInfo: React.FC<TodoProps> = ({
  userId,
  title,
  completed,
  user,
}) => {
  return (
    <article
      className={classNames(
        'TodoInfo',
        {
          'TodoInfo--completed': completed === true,
        },
      )}
    >

      <h2 className="TodoInfo__title">
        {`${title}`}
      </h2>
      
      {
        user && (
          <UserInfo key={userId} {...user} />
        )
      }

    </article>
  );
};
