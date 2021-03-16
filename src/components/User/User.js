import React from 'react';
import { userType } from '../../types';
import './User.scss';

export const User = ({ human }) => (
  <>
    <p className="list__name">
      {human.name}
    </p>
  </>
);

User.propTypes = {
  human: userType.isRequired,
};
