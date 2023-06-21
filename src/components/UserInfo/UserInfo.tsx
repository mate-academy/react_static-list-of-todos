import { User } from '../../types/User';

type Props = {
  userItem: User;
};

export const UserInfo: React.FC<Props> = ({ userItem }) => (
  <a className="UserInfo" href={`mailto:${userItem.email}`}>
    {userItem.name}
  </a>
);
