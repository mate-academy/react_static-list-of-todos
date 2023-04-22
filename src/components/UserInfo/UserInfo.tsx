/* eslint-disable import/no-named-as-default */
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (user) {
    const { email, name } = user;

    return (
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    );
  }

  return null;
};
