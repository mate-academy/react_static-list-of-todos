// Add the required types and props
import classNames from 'classnames';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo = ({ user }: Props) => (
  <a
    className="UserInfo"
    href={classNames('mailto:', { email: true })}
  >
    {user.name}
  </a>
);
