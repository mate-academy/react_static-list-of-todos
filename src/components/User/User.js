import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ data }) {
  return (
    <div>
      <p>
        {data.name}
      </p>
      <p>
        {data.email}
      </p>
    </div>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;