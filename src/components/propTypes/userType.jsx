import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;
