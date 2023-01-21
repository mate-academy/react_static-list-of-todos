import { User } from '../../types/User';

export interface UserInfoType {
  user: User;
}

export const UserInfo = ({ user }: UserInfoType) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
