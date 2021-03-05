import PropTypes from 'prop-types';

export const UserTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export const TodoTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape(UserTypes).isRequired,
});
