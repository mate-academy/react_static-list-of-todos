import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ name }) => (
  <>
    <p className="name">
      {name}
    </p>
  </>
);
