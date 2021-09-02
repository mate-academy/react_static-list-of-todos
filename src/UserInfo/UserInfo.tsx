import { User } from '../type';

interface UserCheck {
  user: User | null,
}

export const UserInfo: React.FC<UserCheck> = (props) => {
  const { user } = props;

  return (
    <>
      <div className="name">
        {user ? user.name : 'Name isn\'t defined'}
      </div>
      <div className="email">
        {user ? user.email : 'Email isn\'t defined'}
      </div>
    </>
  );
};
