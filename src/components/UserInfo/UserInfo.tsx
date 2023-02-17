import { User } from '../../types/User';

export interface UserInfoType {
  user: User;
}

export const UserInfo:React.FC<UserInfoType> = ({ user }) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
