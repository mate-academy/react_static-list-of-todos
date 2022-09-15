import { User } from '../../types/User';

type UserType = {
  userInfo: User,
};

export const UserInfo: React.FC<UserType> = ({ userInfo }) => (
  <>
    <a className="UserInfo" href={userInfo.email}>
      {userInfo.name}
    </a>
  </>
);
