import React from 'react';
import { UserTypes } from '../types';

export const User = ({ name }) => (
  <>
    {name}
  </>
);

User.propTypes = UserTypes.isRequired;
