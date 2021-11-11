import { User } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <div className="TodoList__content">
    <h2 className="TodoList__title">{title}</h2>
    <div className="TodoList__body">
      <p className="TodoList__status">
        Completed:
        {completed ? 'yes' : 'no'}
      </p>
      {user && <UserInfo name={user.name} email={user.email} />}
    </div>
  </div>
);
