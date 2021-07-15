import React from 'react';

export const User = name => (
  <p key={name.name}>
    User:
    {` ${name.name} `}
  </p>
);
