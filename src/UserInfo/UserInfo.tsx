import { User } from '../type';

interface UserCheck {
  user: User | null,
}

export const UserInfo: React.FC<UserCheck> = (props) => {
  const { user } = props;

  return (
    <>
      <p>
        {user ? user.name : 'Name isn\'t defined'}
      </p>
      <p>
        {user ? user.email : 'Email isn\'t defined'}
      </p>
    </>
  );
};
