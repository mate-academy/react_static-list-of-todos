import { User } from '../../types/User';

import './UsersInfo.scss';

type Props = User;

export const UserInfo: React.FC<Props> = (props) => {
  const {
    name,
    username,
    email,
  } = props;

  return (
    <ul className="userInfo">
      <li className="userInfo__user">
        {name}
      </li>
      <li className="userInfo__user">
        {username}
      </li>
      <li className="userInfo__user">
        {email}
      </li>
    </ul>
  );
};
