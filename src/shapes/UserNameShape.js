import PropTypes from 'prop-types';

export const UserNameShapes = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;
