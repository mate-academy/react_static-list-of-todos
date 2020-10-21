import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoListShape = PropTypes.shape({
  todos: PropTypes.arrayOf(UserShape).isRequired,
});
