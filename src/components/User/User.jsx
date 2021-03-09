import React from 'react';

import { TypeUser } from '../../types';
import './User.scss';

export function User({ user }) {
  return (
    <>
      <h3 className="app__name">{user.name}</h3>
    </>
  );
}

User.propTypes = {
  user: TypeUser,
};

User.defaultProps = {
  user: {},
};
