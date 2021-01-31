import React from 'react';
import { UserTypes } from '../../types';

export const User = ({ userData }) => <td className="cell">{userData.name}</td>;

User.propTypes = {
  userData: UserTypes.isRequired,
};
