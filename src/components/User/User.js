import React from 'react';

import { UserTypes } from '../../types';

export const User = ({ user }) => (
  <td>
    {user.name}
  </td>
);

User.propTypes = {
  user: UserTypes.isRequired,
};
