import PropTypes from 'prop-types';
import { UserShapes } from './UserShapes';

export const TodoShapes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape(UserShapes),
};
