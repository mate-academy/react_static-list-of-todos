import React from 'react';
import PropTypes from 'prop-types';

const User = ({ item }) => {
  const { user } = item;

  if (user === undefined) {
    return (
      <p className="name__isnotDefined">
        Name is not defined
      </p>
    );
  }

  return (
    <p className="name">
      {user.name}
    </p>
  );
};

User.propTypes = {
  item: PropTypes.string.isRequired,
};

export default User;
