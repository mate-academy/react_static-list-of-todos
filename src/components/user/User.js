import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UserShape } from '../shapes/UserShape';

import './User.scss';

export const User = ({ user }) => (
  <>
    <strong className={
      classNames('userName')
    }
    >
      {user.name}
    </strong>
  </>
);

User.propTypes = {
  user: PropTypes.objectOf(UserShape).isRequired,
};
