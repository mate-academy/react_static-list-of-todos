import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export function User({ name }) {
  return (
    <>
      <div className="item__name user">
        {`User: `}
        {name}
      </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
