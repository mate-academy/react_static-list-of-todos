import PropTypes from 'prop-types';
import { userShape } from './UserShape';

export const fullShape = PropTypes.shape({
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: userShape.isRequired,
  userId: PropTypes.number.isRequired,
});
