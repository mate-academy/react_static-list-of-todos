import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
});

export const ListShape = PropTypes.shape({
  user: PropTypes.objectOf(UserShape).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
});
