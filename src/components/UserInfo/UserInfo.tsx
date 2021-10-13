// eslint-disable-next-line @typescript-eslint/quotes
import { User } from "../Types/User";

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ ...props }) => (
  <>
    {props.user?.name}
    {' --- '}
    {props.user?.phone}
  </>
);
