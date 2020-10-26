import PropTypes from 'prop-types';
import { UserShape } from '../User/UserShape';

export const TodoShape = {
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape = {
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape = {
        UserShape,
      }.isRequired,
    },
  ).isRequired,
  completed: PropTypes.bool.isRequired,
};
