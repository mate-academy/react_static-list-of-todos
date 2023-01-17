import { User } from "../../types/User";

interface UserInfoType {
  user: User | null;
}

export const UserInfo = ({ user }: UserInfoType) => {
  if (user === null) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  );
};
