import PropTypes from 'prop-types';

export const UserTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export const UserTask = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserTypes.isRequired,
});
