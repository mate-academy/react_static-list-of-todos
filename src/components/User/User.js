import { UserTypes } from '../../types';

export const User = ({ user }) => user.name;

User.propTypes = {
  user: UserTypes.isRequired,
};
