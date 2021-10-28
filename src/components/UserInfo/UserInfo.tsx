import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <table>
    <tr>
      <td>Name:</td>
      <td>{user.name}</td>
    </tr>
    <tr>
      <td>Email:</td>
      <td>{user.email}</td>
    </tr>
    <tr>
      <td>Address:</td>
      <td>
        {user.address.city}
        {', '}
        {user.address.street}
      </td>
    </tr>
  </table>
);
