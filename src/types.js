import PropTypes from 'prop-types';

const UserTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

export default UserTypes;
