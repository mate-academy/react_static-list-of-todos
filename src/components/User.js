import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ username, website, email }) => (
  <>

    <div className="user__username">
      {username}
    </div>
    <div className="user__website">
      {website}
    </div>
    <div className="user__email">
      {email}
    </div>
  </>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

// export default User;
