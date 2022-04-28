import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return (
      <div className="UserInfo">
        Unknown user
      </div>
    );
  }

  const {
    name,
    username,
    email,
  } = user;

  return (
    <div className="UserInfo">
      <p className="UserInfo__property">
        {`for ${name} aka`}
      </p>

      <p className="UserInfo__property">
        <span className="UserInfo__highlighted">
          {`${username}`}
        </span>
      </p>

      <p className="UserInfo__property">
        {`(${email})`}
      </p>
    </div>
  );
};
