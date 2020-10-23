import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoShape = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape(UserShape).isRequired,
  completed: PropTypes.bool.isRequired,
};
