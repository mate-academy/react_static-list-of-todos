import { User } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
  user: User,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <h3 className="title">
      {'Task: '}
      {title}
    </h3>
    <p>
      <span>Status: </span>
      {completed
        ? 'Task Done'
        : 'Not Completed Yet'}
    </p>
    <UserInfo name={user.name} email={user.email} />
  </>
);
