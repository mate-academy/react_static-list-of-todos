import PropTypes from 'prop-types';
import { UserShape } from './UserShapes';

export const ToDoShape = PropTypes.shape({
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: UserShape,
}).isRequired;
