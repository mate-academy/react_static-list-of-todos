import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <div className="User">
      <p>
        Name:
        &nbsp;
        {props.user.name}
      </p>
      <p>
        Username:
        &nbsp;
        {props.user.username}
      </p>
      <p>
        Email:
        &nbsp;
        {props.user.email}
      </p>
      <p>
        Address:
        &nbsp;
        {props.user.address.zipcode}
        ,&nbsp;
        {props.user.address.city}
        ,&nbsp;
        {props.user.address.street}
        ,&nbsp;
        {props.user.address.suite}
      </p>
      <p>
        Coordinates:
        &nbsp;
        {props.user.address.geo.lat}
        /
        {props.user.address.geo.lng}
      </p>
      <p>
        Phone:
        &nbsp;
        {props.user.phone}
      </p>
      <p>
        Web:
        &nbsp;
        {props.user.website}
      </p>
      <p>
        Company:
        &nbsp;
        {props.user.company.name}
        &nbsp;-&nbsp;
        {props.user.company.bs}
      </p>
    </div>
  );
}

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
