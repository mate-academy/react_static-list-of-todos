// Add the required types and props

import { User } from '../../types/User';

interface Props {
  user: User | null;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <a className="UserInfo" href="mailto:Sincere@april.biz" key={user?.id}>
        {user?.name}
      </a>
    </>
  );
};
