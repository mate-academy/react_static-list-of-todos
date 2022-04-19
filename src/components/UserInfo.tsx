import { User } from './Interfaces';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2 className="name">
      {user?.name}
      <span>
        {' - '}
      </span>
    </h2>
    <h2 className="email">
      {user?.email}
    </h2>
  </>
);
