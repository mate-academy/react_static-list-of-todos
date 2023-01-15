import { User } from "../../types/User";

export const UserInfo = ({ user }: { user: User | null }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);
