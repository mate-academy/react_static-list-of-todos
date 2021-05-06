import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ email, name, address }) => (
  <>
    <div className="user">
      <h3>
        Name:
        <span className="user__name">
          {` ${name}`}
        </span>
      </h3>

      <h3>
        email:
        <span className="user__email">
          {` ${email}`}
        </span>
      </h3>

      <h3>
        Address:
      </h3>
      <ul className="user__address">
        <li>
          City:
          {address.city}
        </li>
        <li>
          Street:
          {address.street}
        </li>
        <li>
          Suite:
          {address.suite}
        </li>
        <li>
          Zipcode:
          {address.zipcode}
        </li>
        <li>
          GPS:
          {`${address.geo.lat}N;${address.geo.lng}E`}
        </li>
      </ul>
    </div>
  </>
);

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
    suite: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }),
};

User.defaultProps = {
  address: 'Address is not provided',
};
