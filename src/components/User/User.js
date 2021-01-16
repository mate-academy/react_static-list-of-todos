import React from 'react';

import { UserType } from '../../types';

export const User = ({ name }) => (
  <td>
    {name}
  </td>
);

User.propTypes = {
  name: UserType.name.isRequired,
};
