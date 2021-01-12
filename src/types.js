import PropTypes from 'prop-types';

const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

const TypeTodo = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: TypeUser.isRequired,
});

export default TypeTodo;
