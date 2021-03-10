import React from 'react';
import './User.scss';

import { UserType } from '../../types';

export function User({ user }) {
  return (
    <h3 className="app__name">
      {user.name}
    </h3>
  );
}

User.propTypes = {
  user: UserType.isRequired,
};
