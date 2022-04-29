import { User } from '../../types/User';
import './style.scss';

type Props = {
  props: User;
};

export const UserInfo: React.FC<Props> = ({ props }) => (
  <ul className="User">
    <li className="User__props">
      {`For ${props.name} ${props.username}`}
    </li>
    <li className="User__email">{props.email}</li>
  </ul>
);
