import React from 'react';
import PropTypes from 'prop-types';

import users from '../../api/users';

function User({ id }) {
  return (
    <p>
      {`User:  ${users.find(user => user.id === id).name}`}
    </p>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
};

export default User;
