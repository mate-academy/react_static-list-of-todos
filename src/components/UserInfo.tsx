import { User } from './Interfaces';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <h2 className="name">
        {user.name}
        {' - '}
        {user.email}
      </h2>
    )}
  </>
);
