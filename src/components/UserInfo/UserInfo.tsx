import { User } from "../../types/User";

// Add the required types and props
export const UserInfo: React.FC<{ user: User | null}> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
