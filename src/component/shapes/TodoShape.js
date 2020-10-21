import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  user: UserShape.isRequired,
});
