import React from 'react';

import './user.scss';

export const User = ({user}) => (
  <h2 className="user">
    {user.name}
  </h2>
);
