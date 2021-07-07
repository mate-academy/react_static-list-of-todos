import PropTypes from 'prop-types';

const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;

export default UserShape;
