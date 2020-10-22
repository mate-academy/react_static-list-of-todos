import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
