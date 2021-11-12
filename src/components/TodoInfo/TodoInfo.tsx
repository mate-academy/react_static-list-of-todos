import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string,
  complited: boolean,
  user: User
};

export const TodoInfo: React.FC<Props> = ({ title, complited, user }) => (
  <>
    <h2>{title}</h2>
    <p>{complited ? 'Done' : 'Not done'}</p>
    <UserInfo name={user.name} email={user.email} />
  </>
);
