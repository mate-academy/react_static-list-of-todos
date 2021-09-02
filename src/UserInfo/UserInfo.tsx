import { User } from '../type';

interface UserCheck {
  user: User | null,
}

export const UserInfo: React.FC<UserCheck> = (props) => {
  const { user } = props;

  return (
    <>
      <div>
        {user ? user.name : 'Name isn\'t defined'}
      </div>
      <div>
        {user ? user.email : 'Email isn\'t defined'}
      </div>
    </>
  );
};
