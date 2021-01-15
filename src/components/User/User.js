import React from 'react';

import { TodoType } from '../../types';

export const User = ({ user }) => (
  <td>
    {user.name}
  </td>
);

User.propTypes = {
  user: TodoType.user.isRequired,
};
