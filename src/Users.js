import React from 'react';
import PropTypes from 'prop-types';

function User({ person }) {
  return (
    <td>
      {person.name}
    </td>
  );
}

User.propTypes = { person: PropTypes.objectOf(PropTypes.any).isRequired };

export default User;
