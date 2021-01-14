import React from 'react';
import { TodoTypes } from '../../types';

export const User = ({ name }) => (
  <>
    {name}
  </>
);

User.propTypes = TodoTypes.user;
