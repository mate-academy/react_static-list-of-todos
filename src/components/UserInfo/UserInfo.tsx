import { User } from '../../types/User';

type Props = {
  user: User | null;
};
// Add the required types and props
export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      {
        (user?.name && user?.email)
          && <a className="UserInfo" href={`mailto:${user.email}`}>{user.name}</a>
      }
    </>
  );
};
