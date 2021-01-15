import PropTypes from 'prop-types';

export const TodoesTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
});

export const UserTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
});
