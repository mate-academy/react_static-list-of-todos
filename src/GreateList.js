import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Status from './Status';
import Title from './Title';

const GreateList = ({ items }) => (
  <>
    {items.map(item => (
      <li key={item.id}>
        <Title item={item} />
        <Status item={item} />
        <User item={item} />
      </li>
    ))}
  </>
);

GreateList.propTypes = {
  items: PropTypes.shape({
    map: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default GreateList;
