import PropTypes from 'prop-types';
import { UserShape } from './UserShapes';

export const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  completed: PropTypes.bool.isRequired,
}).isRequired;
