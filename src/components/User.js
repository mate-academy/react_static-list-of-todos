import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="User">
    <p>
      Name:
      &nbsp;
      {user.name}
    </p>
    <p>
      Username:
      &nbsp;
      {user.username}
    </p>
    <p>
      Email:
      &nbsp;
      {user.email}
    </p>
    <p>
      Address:
      &nbsp;
      {user.address.zipcode}
      ,&nbsp;
      {user.address.city}
      ,&nbsp;
      {user.address.street}
      ,&nbsp;
      {user.address.suite}
    </p>
    <p>
      Coordinates:
      &nbsp;
      {user.address.geo.lat}
      /
      {user.address.geo.lng}
    </p>
    <p>
      Phone:
      &nbsp;
      {user.phone}
    </p>
    <p>
      Web:
      &nbsp;
      {user.website}
    </p>
    <p>
      Company:
      &nbsp;
      {user.company.name}
      &nbsp;-&nbsp;
      {user.company.bs}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    userId: PropTypes.number,
    address: PropTypes.object,
    company: PropTypes.object,
    id: PropTypes.number,
    website: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default User;
