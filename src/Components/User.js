import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <>
    <ul>
      USER INFO:
      <li>
        name:
        {user.name}
      </li>
      <li>
        username:
        {user.username}
      </li>
      <li>
        phone:
        {user.phone}
      </li>
      <li>
        email:
        {user.email}
      </li>
      <li>
        website:
        {user.website}
      </li>
      <li>
        zipcode:
        {user.address.zipcode}
      </li>
      <li>
        company:
        {user.company.name}
      </li>
    </ul>
  </>
);

User.propTypes = { user: PropTypes.objectOf(PropTypes) };
User.defaultProps = {
  user: {
    name: 'no name',
    website: 'no website',
    address: { zipcode: 'no address zipcode' },
    company: { name: 'no company name' },
  },
};

export default User;
