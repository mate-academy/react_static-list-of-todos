import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ name }) {
  return (
    <>
      <div className="name">
        {name}
      </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
