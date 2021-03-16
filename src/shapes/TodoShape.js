import PropTypes from 'prop-types';
import UserShape from './UserShape';

const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserShape.isRequired,
}).isRequired;

export default TodoShape;
