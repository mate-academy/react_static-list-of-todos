import { User } from '../type';

interface UserCheck {
  user: User | null,
}

export const UserInfo: React.FC<UserCheck> = (props) => {
  const { user } = props;

  return (
    <>
      <li>
        {user ? user.name : 'Name isn\'t defined'}
      </li>
      <li>
        {user ? user.email : 'Email isn\'t defined'}
      </li>
    </>
  );
};
