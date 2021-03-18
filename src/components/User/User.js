import React from 'react';
import { TypeUser } from '../../types';
import './User.scss';

export const User = ({ name }) => (
  <>
    {`user: `}
    <span className="user__name">{name}</span>
  </>
);

User.propTypes = TypeUser;
