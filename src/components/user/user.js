import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const User = ({ name, address, company }) => (
  <>
    <div className="card-desc">
      <span className="name">Name:</span>
      <span className="option">{name}</span>
    </div>
    <div className="card-desc">
      <span className="name">City:</span>
      <span className="option">{address.city}</span>
    </div>
    <div className="card-desc">
      <span className="name">Company:</span>
      <span className="option">{company.name}</span>
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({ city: PropTypes.string.isRequired }).isRequired,
  company: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
};

export default User;
