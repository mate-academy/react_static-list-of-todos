import PropTypes from 'prop-types';

const TodoListShape = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
})).isRequired;

export default TodoListShape;
