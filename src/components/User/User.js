import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, username, website }) => (
  <div className="User">
    <h2 className="name">
      {name}
    </h2>
    <div className="info">
      <div>
        {username}
      </div>

      <a href={website} className="link">visit website</a>
    </div>

  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
