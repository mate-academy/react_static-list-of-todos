import PropTypes from 'prop-types';

export const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;

export const TypeTodo = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: TypeUser,
});
