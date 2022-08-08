// Add the required types and props
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = (props) => (
  <>
    <a className="UserInfo" href={`mailto:${props.user.email}`}>
      {props.user.name}
    </a>
  </>
);
