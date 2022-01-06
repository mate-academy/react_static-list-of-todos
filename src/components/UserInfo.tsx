import { PropsUser } from "../types/Types";

export const UserInfo: React.FC<PropsUser> = ({ user }) => {
  return (
    user &&
    <div className="fancyUser">
      <span className="fancyUser__name">{user.name}</span>
      <span className="fancyUser__email">{user.email}</span>
    </div>
  );
};
