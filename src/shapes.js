import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  completed: PropTypes.bool.isRequired,
});
