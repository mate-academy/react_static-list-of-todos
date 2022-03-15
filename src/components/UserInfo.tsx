import { User } from '../types/interfaces';

export const UserInfo: React.FC<Props> = ({
  name,
  email,
}) => (
  <>
    <div>{name}</div>
    <div>{email}</div>
  </>
);

type Props = User;
